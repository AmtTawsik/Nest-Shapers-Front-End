import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getBaseUrl } from '../../helpers/config/envConfig';
import { tagTypes } from '../tagTypes';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    tagTypes.user,
    tagTypes.serviceCategory,
    tagTypes.specialization,
    tagTypes.serviceTeam,
    tagTypes.service,
    tagTypes.availableService,
    tagTypes.upcomingService,
    tagTypes.teamMember,
    tagTypes.reviewAndRating,
    tagTypes.slots,
    tagTypes.booking,
    tagTypes.feedback,
    tagTypes.blog,
    tagTypes.faq,
    tagTypes.notification,
    'avService',
    'rmService',
  ],
});
