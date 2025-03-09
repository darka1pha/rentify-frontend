'use server';
import { fetcher } from '@/lib/fetcher';
import { API } from '../urls';
import { signUpSchemaType } from '@/components/auth/signup/schema';
import { UserType } from '@/lib/constants';
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
  const response = await fetcher<
    { accessToken: string; message: string } | { error: { message: string } }
  >(API.SIGNUP, {
    method: 'POST',
    body: JSON.stringify({ ...formData, agency }),
  });
  return response;
};

export async function removeAccessToken() {
  const { cookies } = await import('next/headers');
  (await cookies()).delete('access-token');
}
