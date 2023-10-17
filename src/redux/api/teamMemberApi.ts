import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const TEAM_MEMBER = '/team-member';

export const teamMemberApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    teamMembers: build.query({
      query: (arg: Record<string, any>) => ({
        url: TEAM_MEMBER,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          teamMembers: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.teamMember],
    }),

    addTeamMember: build.mutation({
      query: (data) => ({
        url: `${TEAM_MEMBER}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.teamMember],
    }),

    // get single by id
    teamMember: build.query({
      query: (id) => ({
        url: `${TEAM_MEMBER}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.teamMember],
    }),

    // update single by id
    updateTeamMember: build.mutation({
      query: (data) => ({
        url: `${TEAM_MEMBER}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.teamMember],
    }),

    // delete single by id
    deleteTeamMember: build.mutation({
      query: (id) => ({
        url: `${TEAM_MEMBER}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.teamMember],
    }),
  }),
});

export const {
  useAddTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useTeamMemberQuery,
  useTeamMembersQuery,
  useUpdateTeamMemberMutation,
} = teamMemberApi;
