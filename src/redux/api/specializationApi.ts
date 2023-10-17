import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const SPECIALIZATION = '/specialization';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    specializations: build.query({
      query: (arg: Record<string, any>) => ({
        url: SPECIALIZATION,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          specializations: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.specialization],
    }),

    addSpecialization: build.mutation({
      query: (data) => ({
        url: `${SPECIALIZATION}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.specialization],
    }),

    // get single by id
    specialization: build.query({
      query: (id) => ({
        url: `${SPECIALIZATION}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.specialization],
    }),

    // update single by id
    updateSpecialization: build.mutation({
      query: (data) => ({
        url: `${SPECIALIZATION}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.specialization],
    }),

    // delete single by id
    deleteSpecialization: build.mutation({
      query: (id) => ({
        url: `${SPECIALIZATION}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.specialization],
    }),
  }),
});

export const {
  useAddSpecializationMutation,
  useSpecializationQuery,
  useUpdateSpecializationMutation,
  useDeleteSpecializationMutation,
  useSpecializationsQuery,
} = specializationApi;
