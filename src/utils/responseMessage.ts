import { message } from 'antd';

interface ErrorResponse {
  message: string;
  errorMessages: {
    path: string;
    message: string;
  }[];
}

export const responseMessage = (res: any, customMessage: string) => {
  if ('error' in res && res.error) {
    const errorResponse = res.error as ErrorResponse;
    message.error(
      errorResponse.message ||
        errorResponse.errorMessages[0].message ||
        'Something went wrong'
    );
  }
  if ('data' in res && res.data) {
    message.success(res.data.message || customMessage);
  }
};
