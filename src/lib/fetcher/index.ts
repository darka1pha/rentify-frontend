import { redirect } from 'next/navigation';
import { API } from '../services/urls';

export async function fetcher<T>(
  path: string,
  options: RequestInit & { multipart?: boolean } = {},
  retry = true // Controls whether to retry after a 401
): Promise<T> {
  const url = `${API.BASE_URL}${path}`;
  const headers = new Headers(options.headers);

  const { multipart, ..._options } = { ...options };

  if (options.body && !multipart) {
    headers.set('Content-Type', 'application/json');
  }
  let authToken: string | undefined;

  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    authToken = (await cookies()).get('access-token')?.value;

    if (authToken) {
      headers.set('Authorization', `Bearer ${authToken}`);
    }
  }

  const response = await fetch(url, {
    ..._options,
    headers,
    credentials: 'include',
  });

  if (!response.ok) {
    try {
      const error = await response.json();
      switch (response.status) {
        case 400:
          console.error(error);
          return error;
        case 401:
          return error;
        case 403:
          throw new Error('Forbidden');
        case 404:
          console.error(url);
          throw new Error('Not Found');
        case 409:
          // console.error(error);
          return { error } as unknown as T;
        case 500:
          throw new Error('Internal Server Error');
      }
    } catch (error) {
      if (retry && response.status === 401) {
        redirect('/signout');
      } else {
        console.log('STATUSSSSSSSS: ', response.status);
        console.log('Error:', error);
        throw new Error('An error occurred');
      }
    }
  }
  console.log(response);
  return response.json() as Promise<T>;
}
