import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const NOTIFICATION = '/notification';

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    notifications: build.query({
      query: (arg: Record<string, any>) => ({
        url: NOTIFICATION,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          notifications: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.notification],
    }),

    addNotification: build.mutation({
      query: (data) => ({
        url: `${NOTIFICATION}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.notification],
    }),

    // get single by id
    notification: build.query({
      query: (id) => ({
        url: `${NOTIFICATION}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.notification],
    }),

    // update single by id
    updateNotification: build.mutation({
      query: (data) => ({
        url: `${NOTIFICATION}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.notification],
    }),

    // delete single by id
    deleteNotification: build.mutation({
      query: (id) => ({
        url: `${NOTIFICATION}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const {
  useAddNotificationMutation,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
  useNotificationsQuery,
  useNotificationQuery,
} = notificationApi;
