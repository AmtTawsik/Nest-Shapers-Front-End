import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const FAQ = '/faq';

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    faqs: build.query({
      query: (arg: Record<string, any>) => ({
        url: FAQ,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          faqs: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),

    addFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.faq],
    }),

    // get single by id
    faq: build.query({
      query: (id) => ({
        url: `${FAQ}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.faq],
    }),

    // update single by id
    updateFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),

    // delete single by id
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `${FAQ}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useAddFaqMutation,
  useDeleteFaqMutation,
  useFaqQuery,
  useUpdateFaqMutation,
  useFaqsQuery,
} = faqApi;
