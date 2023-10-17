import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const PROFILE = '/profile';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: (arg: Record<string, any>) => ({
        url: PROFILE,
        method: 'GET',
        params: arg,
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
        url: `${PROFILE}/update}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = profileApi;
