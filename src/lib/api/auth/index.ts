import { API } from '@/lib/urls';
import { fetcher } from '@/lib/utils';
import { APIError } from '@/types/common';
import { User } from '@/types/user';

export const getProfile = async () => {
  try {
    const response = await fetcher<User | APIError>(API.PROFILE);
    if ('statusCode' in response && response.statusCode === 401) {
      throw new Error('Unauthorized');
    }
    return response as User;
  } catch (error) {
    return null;
  }
};
