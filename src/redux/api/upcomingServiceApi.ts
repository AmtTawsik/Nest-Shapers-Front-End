import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const UPCOMING_SERVICE = '/upcoming-service';

export const upcomingServiceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    upcomingServices: build.query({
      query: (arg: Record<string, any>) => ({
        url: UPCOMING_SERVICE,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          upcomingServices: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.upcomingService],
    }),

    addUpcomingService: build.mutation({
      query: (data) => ({
        url: `${UPCOMING_SERVICE}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.upcomingService],
    }),

    // get single by id
    upcomingService: build.query({
      query: (id) => ({
        url: `${UPCOMING_SERVICE}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.upcomingService],
    }),

    // update single by id
    updateUpcomingService: build.mutation({
      query: (data) => ({
        url: `${UPCOMING_SERVICE}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),

    // delete single by id
    deleteUpcomingService: build.mutation({
      query: (id) => ({
        url: `${UPCOMING_SERVICE}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.upcomingService],
    }),
  }),
});

export const {
  useAddUpcomingServiceMutation,
  useDeleteUpcomingServiceMutation,
  useUpcomingServiceQuery,
  useUpcomingServicesQuery,
  useUpdateUpcomingServiceMutation,
} = upcomingServiceApi;
