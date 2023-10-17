import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const BOOKING = '/booking';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: BOOKING,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          bookings: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),

    addBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING}/book-service`,
        method: 'POST',
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    cacelBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING}/cancel-book/${data.bookingId}/${data.paymentId}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    finishBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING}/finish-book/${data.bookingId}/${data.paymentId}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    // get single by id
    getSingleBooking: build.query({
      query: (id) => ({
        url: `${BOOKING}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.booking],
    }),

    // update single by id
    updateSingleBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    // delete single by id
    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useBookingsQuery,
  useCacelBookingMutation,
  useFinishBookingMutation,
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
  useUpdateSingleBookingMutation,
} = bookingApi;
