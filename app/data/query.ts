import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { Anime } from '~/utils/types';
import axios from 'axios';

export const useSearchAnime = (query: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['search_anime' + query],
    queryFn: async () => {
      const { data } = await axios.get('https://api.jikan.moe/v4/anime', {
        params: {
          q: query,
        },
      });
      return data;
    },
  });
  return { data: data?.data, isLoading, isError };
};

export const useDetailAnime = (
  id: number,
  queryOptions?: Omit<UseQueryOptions<{ data: Anime }>, 'queryKey'>
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['detail_anime' + id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      return data;
    },
    ...queryOptions,
  });
  return { data: data?.data, isLoading, isError };
};
