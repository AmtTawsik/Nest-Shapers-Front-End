import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const AVAILABLE_SERVICE = '/available-service';

export const availableServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    availableServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: AVAILABLE_SERVICE,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          availableServices: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.availableService],
    }),

    remainingServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${AVAILABLE_SERVICE}/remaining-service`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          availableServices: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.availableService],
    }),

    addAvailableService: build.mutation({
      query: (data) => ({
        url: `${AVAILABLE_SERVICE}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.availableService],
    }),

    // get single by id
    availableService: build.query({
      query: (id) => ({
        url: `${AVAILABLE_SERVICE}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.availableService],
    }),

    remainingService: build.query({
      query: (data) => ({
        url: `${AVAILABLE_SERVICE}/${data.id}/${data.date}`,
        method: 'GET',
      }),
      //@ts-ignore
      providesTags: (result, error, arg) => [{ type: 'avService', id: arg.id }],
    }),

    // update single by id
    updateAvailableService: build.mutation({
      query: (data) => ({
        url: `${AVAILABLE_SERVICE}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.availableService],
    }),

    // delete single by id
    deleteAvailableService: build.mutation({
      query: (id) => ({
        url: `${AVAILABLE_SERVICE}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.availableService],
    }),
  }),
});

export const {
  useAddAvailableServiceMutation,
  useAvailableServicesQuery,
  useAvailableServiceQuery,
  useUpdateAvailableServiceMutation,
  useDeleteAvailableServiceMutation,
  useRemainingServicesQuery,
  useRemainingServiceQuery,
} = availableServiceApi;
