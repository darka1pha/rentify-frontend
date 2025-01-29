import { refreshAccessToken, removeAccessToken } from '../auth';
import { API } from '../urls';

export async function fetcher<T>(
  path: string,
  options: RequestInit = {},
  retry = true // Controls whether to retry after a 401
): Promise<T> {
  const url = `${API.BASE_URL}${path}`;
  const headers = new Headers(options.headers);

  if (options.body) {
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
    ...options,
    headers,
    credentials: 'include',
  });

  if (response.status === 401 && retry) {
    console.warn('401 Unauthorized: Deleting access token and retrying...');

    // Remove access token
    await removeAccessToken();

    // Retry request without token
    return fetcher<T>(path, options, false);
  }

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

// with refresh token avalable
// export async function fetcher<T>(
//   path: string,
//   options: RequestInit = {},
//   retry = true // Controls whether to retry after refreshing token
// ): Promise<T> {
//   const url = `${API.BASE_URL}${path}`;
//   const headers = new Headers(options.headers);

//   if (options.body) {
//     headers.set('Content-Type', 'application/json');
//   }

//   let authToken: string | undefined;

//   if (typeof window === 'undefined') {
//     const { cookies } = await import('next/headers');
//     authToken = (await cookies()).get('access-token')?.value;

//     if (authToken) {
//       headers.set('Authorization', `Bearer ${authToken}`);
//     }
//   }

//   const response = await fetch(url, {
//     ...options,
//     headers,
//     credentials: 'include',
//   });

//   if (response.status === 401 && retry) {
//     console.warn('401 Unauthorized: Trying to refresh token...');

//     // Attempt to refresh token before removing it
//     const refreshed = await refreshAccessToken();
//     if (refreshed) {
//       return fetcher<T>(path, options, false); // Retry with new token
//     }

//     // If token refresh fails, remove the token and retry without it
//     await removeAccessToken();
//     return fetcher<T>(path, options, false);
//   }

//   if (!response.ok) {
//     throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
//   }

//   return response.json() as Promise<T>;
// }
