import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from '../../../utils/api-base-query';

export interface UserResource {
    id: number;
    name: string;
}

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: apiBaseQuery,
    endpoints: (builder) => ({
        getUsers: builder.query<UserResource[], void>({
            query: () => 'users',
        }),
    }),
});

export const { useGetUsersQuery } = usersApi;