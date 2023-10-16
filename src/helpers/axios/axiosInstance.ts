// import { authKey } from '@/constants/storgeKey';
// import { getNewAccessToken } from '@/services/auth.service';
import { authKey } from '@/constants/global';
import { getNewAccessToken } from '@/services/auth.service';
import { IGenericErrorResponse, ResponseSuccessType } from '@/types';
import { getFromLocalStorage, setLocalStorage } from '@/utils/localStorage';
// import { getFromLocalStorage, setLocalStorage } from '@/utils/localStorage';

import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(
  function (response): any {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
      status: response?.data?.status,
      statusCode: response?.data?.statusCode,
    };
    return responseObject;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();

      const accessToken = response?.data?.accessToken;
      config.headers['Authorization'] = accessToken;
      setLocalStorage(authKey, accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.error?.statusCode || 500,
        message: error?.response?.data?.message || 'Something went wrong',
        errorMessages: error?.response?.data?.errorMessages,
      };

      return Promise.reject(responseObject);
    }
  }
);

export { instance };
