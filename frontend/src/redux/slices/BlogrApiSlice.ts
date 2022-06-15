/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { userDetailsType } from './UserDetailsSlice';

export interface LoginRequest {
  email: string;
  password: string;
}

export const blogrApiSlice = createApi({
  // When we attach this to a store where are we keeping the data?
  reducerPath: 'api',

  // How are we going to fetch this data?
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders(headers, { getState }) {
      headers.set('Content-Type', 'application/json');

      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).userDetails.user?.token;
      if (token) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchUserDetails: builder.query<userDetailsType, string>({
        query(id) {
          return `/users/${id}`;
        },
      }),
      login: builder.mutation<userDetailsType, LoginRequest>({
        query: (credentials) => ({
          url: '/users/sign-in',
          method: 'POST',
          body: credentials,
        }),
      }),
    };
  },
});

export const { useFetchUserDetailsQuery, useLoginMutation } = blogrApiSlice;