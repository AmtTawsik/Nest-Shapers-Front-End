import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const FEEDBACK = '/feedback';

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    feedbacks: build.query({
      query: (arg: Record<string, any>) => ({
        url: FEEDBACK,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          feedbacks: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),

    addFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.feedback],
    }),

    // get single by id
    feedback: build.query({
      query: (id) => ({
        url: `${FEEDBACK}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.feedback],
    }),

    // update single by id
    updateFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    // delete single by id
    deleteFeedback: build.mutation({
      query: (id) => ({
        url: `${FEEDBACK}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useAddFeedbackMutation,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
  useFeedbackQuery,
  useFeedbacksQuery,
} = feedbackApi;
