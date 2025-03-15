import { fetcher } from '@/lib/fetcher';
import { API } from '../urls';
import { Property } from '@/types/property';

export const getProprties = async () => {
  const response = await fetcher<Property[]>(API.PROPERTIES);
  return response;
};
