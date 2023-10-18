import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const SLOTS = '/slots';

export const slotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    slots: build.query({
      query: (arg: Record<string, any>) => ({
        url: SLOTS,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          slots: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.slots],
    }),

    addSlot: build.mutation({
      query: (data) => ({
        url: `${SLOTS}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.slots],
    }),

    // get single by id
    getSlot: build.query({
      query: (id) => ({
        url: `${SLOTS}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.slots],
    }),

    // update single by id
    updateSlot: build.mutation({
      query: (data) => ({
        url: `${SLOTS}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.slots],
    }),

    // delete single by id
    deleteSlot: build.mutation({
      query: (id) => ({
        url: `${SLOTS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.slots],
    }),
  }),
});

export const {
  useAddSlotMutation,
  useDeleteSlotMutation,
  useSlotsQuery,
  useUpdateSlotMutation,
  useGetSlotQuery,
} = slotApi;
