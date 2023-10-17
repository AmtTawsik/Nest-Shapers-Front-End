import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const SERVICE = '/service';

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: (arg: Record<string, any>) => ({
        url: SERVICE,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          services: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    addService: build.mutation({
      query: (data) => ({
        url: `${SERVICE}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.service],
    }),

    // get single by id
    service: build.query({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.service],
    }),

    // update single by id
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    // delete single by id
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useDeleteServiceMutation,
  useServicesQuery,
  useServiceQuery,
  useUpdateServiceMutation,
} = serviceApi;
