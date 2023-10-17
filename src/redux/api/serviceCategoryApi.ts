import { tagTypes } from '../tagTypes';
import { baseApi } from './baseApi';

const SERVICE_CATEGORY = '/service-category';

export const serviceCategoriApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    serviceCategories: build.query({
      query: (arg: Record<string, any>) => ({
        url: SERVICE_CATEGORY,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          serviceCategories: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.serviceCategory],
    }),

    addServiceCategory: build.mutation({
      query: (data) => ({
        url: `${SERVICE_CATEGORY}`,
        method: 'POST',
        data,
      }),

      invalidatesTags: [tagTypes.serviceCategory],
    }),

    // get single by id
    serviceCategory: build.query({
      query: (id) => ({
        url: `${SERVICE_CATEGORY}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.serviceCategory],
    }),

    // update single by id
    updateServiceCategory: build.mutation({
      query: (data) => ({
        url: `${SERVICE_CATEGORY}/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: [tagTypes.serviceCategory],
    }),

    // delete single by id
    deleteServiceCategory: build.mutation({
      query: (id) => ({
        url: `${SERVICE_CATEGORY}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.serviceCategory],
    }),
  }),
});

export const {
  useServiceCategoriesQuery,
  useServiceCategoryQuery,
  useAddServiceCategoryMutation,
  useDeleteServiceCategoryMutation,
  useUpdateServiceCategoryMutation,
} = serviceCategoriApi;
