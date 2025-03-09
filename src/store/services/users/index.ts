import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from '../../../utils/api-base-query';
import { UserResource } from './type';

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