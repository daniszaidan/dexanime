import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { Anime, JikanAnimeResponse } from '~/utils/types';
import axios from 'axios';

export const useSearchAnime = (query: string, page: number = 1) => {
  console.log('query', query);
  console.log('page', page);
  const result = useQuery<JikanAnimeResponse, Error>({
    queryKey: ['search_anime', query, page],
    queryFn: async () => {
      const { data } = await axios.get<JikanAnimeResponse>(
        'https://api.jikan.moe/v4/anime',
        {
          params: { q: query, page },
        }
      );
      return data;
    },
    placeholderData: (prevData) => prevData,
  });

  console.log('data', result);

  return {
    data: result.data?.data ?? [],
    pagination: result.data?.pagination,
    isLoading: result.isLoading,
    isError: result.isError,
  };
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
