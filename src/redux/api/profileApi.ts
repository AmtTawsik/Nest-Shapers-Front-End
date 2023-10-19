import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const PROFILE = '/profile';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: PROFILE,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {
          profileData: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    // update single by id
    updateProfile: build.mutation({
      query: (data) => ({
        url: '/profile/update',
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = profileApi;
