import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signin`,
        method: 'POST',
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    userRegister: build.mutation({
      query: (signUpData) => ({
        url: `${AUTH_URL}/signup`,
        method: 'POST',
        data: signUpData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;
