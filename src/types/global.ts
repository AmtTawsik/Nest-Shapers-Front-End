export type IChildrenNode = {
  children: React.ReactNode;
};

export type IMeta = {
  limit?: number;
  page?: number;
  size?: number;
  total?: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  message?: string;
  status?: string;
  statusCode?: number;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
