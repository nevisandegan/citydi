import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from '../../../utils/api-base-query';
import { favoriteResource } from './type';


export const favoritesApi = createApi({
    reducerPath: 'favoritesApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        getFavorites: builder.query<favoriteResource[], void>({
            query: () => 'faivorites',
        }),
    }),
});

export const { useGetFavoritesQuery } = favoritesApi;