import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const REVIEW_AND_RATING = '/review-and-rating';

export const reviewAndRatingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    reviewAndRatings: build.query({
      query: (arg: Record<string, any>) => ({
        url: REVIEW_AND_RATING,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          reviewAndRatings: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.reviewAndRating],
    }),

    addReviewAndRating: build.mutation({
      query: (data) => ({
        url: `${REVIEW_AND_RATING}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.reviewAndRating],
    }),

    // get single by id
    reviewAndRating: build.query({
      query: (id) => ({
        url: `${REVIEW_AND_RATING}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.reviewAndRating],
    }),

    // update single by id
    updateReviewAndRating: build.mutation({
      query: (data) => ({
        url: `${REVIEW_AND_RATING}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.reviewAndRating],
    }),

    // delete single by id
    deleteReviewAndRating: build.mutation({
      query: (id) => ({
        url: `${REVIEW_AND_RATING}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.reviewAndRating],
    }),
  }),
});

export const {
  useAddReviewAndRatingMutation,
  useDeleteReviewAndRatingMutation,
  useReviewAndRatingsQuery,
  useReviewAndRatingQuery,
  useUpdateReviewAndRatingMutation,
} = reviewAndRatingApi;
