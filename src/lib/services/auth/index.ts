'use server';
import { fetcher } from '@/lib/fetcher';
import { API } from '../urls';
import { signUpSchemaType } from '@/components/auth/signup/schema';
import { UserType } from '@/lib/constants';
import { redirect } from 'next/navigation';
export async function refreshAccessToken(): Promise<boolean> {
  try {
    const response = await fetch(`${API.BASE_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      console.warn('Failed to refresh access token.');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
}

export const signup = async (
  formData: signUpSchemaType & { type: UserType; agency?: string }
) => {
  const agency = formData.agency ?? '';
  const response = await fetcher<{
    accessToken: string;
    message: string;
    success: boolean;
  }>(API.SIGNUP, {
    method: 'POST',
    body: JSON.stringify({ ...formData, agency }),
  });
  if (response.success) {
    // set access token
    const { cookies } = await import('next/headers');
    (await cookies()).set('access-token', response.accessToken);
    redirect('/');
  }
  return response;
};

export async function removeAccessToken() {
  const { cookies } = await import('next/headers');
  (await cookies()).delete('access-token');
}
