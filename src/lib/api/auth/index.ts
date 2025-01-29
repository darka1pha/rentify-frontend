import { API } from '../urls';
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

export async function removeAccessToken() {
  'use server'; // Needed for server actions

  const { cookies } = await import('next/headers');
  (await cookies()).delete('access-token');
}
