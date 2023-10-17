import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const BLOG = '/blog';

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    blogs: build.query({
      query: (arg: Record<string, any>) => ({
        url: BLOG,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          blogs: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.blog],
    }),

    addBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.blog],
    }),

    // get single by id
    blog: build.query({
      query: (id) => ({
        url: `${BLOG}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.blog],
    }),

    // update single by id
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    // delete single by id
    deleteBlog: build.mutation({
      query: (id) => ({
        url: `${BLOG}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useAddBlogMutation,
  useBlogQuery,
  useDeleteBlogMutation,
  useBlogsQuery,
  useUpdateBlogMutation,
} = blogApi;
