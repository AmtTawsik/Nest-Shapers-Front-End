import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const SERVICE_TEAM = '/service-team';

export const serviceTeamApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    serviceTeams: build.query({
      query: (arg: Record<string, any>) => ({
        url: SERVICE_TEAM,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          serviceTeams: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.serviceTeam],
    }),

    addServiceTeam: build.mutation({
      query: (data) => ({
        url: `${SERVICE_TEAM}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.serviceTeam],
    }),

    // get single by id
    serviceTeam: build.query({
      query: (id) => ({
        url: `${SERVICE_TEAM}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.serviceTeam],
    }),

    // update single by id
    updateServiceTeam: build.mutation({
      query: (data) => ({
        url: `${SERVICE_TEAM}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.serviceTeam],
    }),

    // delete single by id
    deleteServiceTeam: build.mutation({
      query: (id) => ({
        url: `${SERVICE_TEAM}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.serviceTeam],
    }),
  }),
});

export const {
 useAddServiceTeamMutation,
 useDeleteServiceTeamMutation,
 useServiceTeamsQuery,
 useUpdateServiceTeamMutation,
 useServiceTeamQuery
} = serviceTeamApi;