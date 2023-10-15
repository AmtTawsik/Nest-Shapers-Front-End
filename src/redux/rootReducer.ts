import { baseApi } from './api/baseApi';
import sidebarReducer from './slices/sidebarSlice';

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  sidebar: sidebarReducer,
};
