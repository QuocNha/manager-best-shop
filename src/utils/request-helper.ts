import { AxiosError, AxiosResponse } from "axios";

export const SUCCESS_NETWORK_CODE = 200;
export const ERROR_NETWORK_CODE = -100;
export const RESULT_CODE_PUSH_OUT = 403;
export const STATUS_TIME_OUT = "ECONNABORTED";
export const CODE_TIME_OUT = 408;

export interface IError {
  field?: string;
  message?: string;
  code?: number | string;
}

export interface ResponseBase<T = any> {
  responseCode?: any;
  code: string | number;
  status?: any;
  message?: string | null;
  data?: T | any;
  success: boolean;
  errors?: IError[];
  current_page?: number;
  per_page?: string;
  last_page?: number;
  total?: number;
  isLoading?: any;
}

export interface RequestBase {
  search?: number;
  page?: number;
  limit?: string | null;
  order?: "asc" | "desc";
  order_by?: string;
}

const handleData = (response: ResponseBase) => {
  if (response?.status === SUCCESS_NETWORK_CODE) {
    return { data: response };
  }
  return { error: response };
};

export const handleAxios = (
  data: AxiosError & AxiosResponse
): { data: ResponseBase } | { error: ResponseBase } => {
  if (data?.code === STATUS_TIME_OUT) {
    //

    return handleApi(CODE_TIME_OUT, data?.response?.data);
  }

  // success
  if (data?.data) {
    if (data?.data?.code === "96") {
      return handleApi(data?.data?.code, data?.response?.data);
    }
    return handleApi(data?.status, data);
  }
  // error
  if (data?.response) {
    return handleApi(data?.response?.status, data?.response?.data);
  }
  return handleApi(ERROR_NETWORK_CODE);
};

export const handleApi = (status: number, data?: any) => {
  switch (status) {
    case ERROR_NETWORK_CODE:
      return handleData({
        code: ERROR_NETWORK_CODE,
        message: "",
        data: data || null,
        success: false,
        status,
      });
    case 200:
      return handleData({
        ...data?.data,
        status,
      });
    case 400:
      return handleData({
        code: status,
        message: "error:400",
        data: data || null,
        success: false,
        status,
      });
    case 401:
      return handleData({
        code: status,
        message: "error:401",
        data: data || null,
        success: false,
        status,
      });
    case 402:
      return handleData({
        code: status,
        message: "error:402",
        data: data || null,
        success: false,
        status,
      });
    case 403:
      return handleData({
        code: status,
        message: "error:403",
        data: data || null,
        success: false,
        status,
      });
    case 404:
      return handleData({
        code: status,
        message: "error:404",
        data: data || null,
        success: false,
        status,
      });
    case 405:
      return handleData({
        code: status,
        message: "error:405",
        data: data || null,
        success: false,
        status,
      });
    case 406:
      return handleData({
        code: status,
        message: "error:406",
        data: data || null,
        success: false,
        status,
      });
    case 407:
      return handleData({
        code: status,
        message: "error:407",
        data: data || null,
        success: false,
        status,
      });
    case 408:
      return handleData({
        code: status,
        message: "error:408",
        data: data || null,
        success: false,
        status,
      });

    case 409:
      return handleData({
        code: status,
        message: "error:409",
        data: data || null,
        success: false,
        status,
      });
    case 410:
      return handleData({
        code: status,
        message: "error:410",
        data: data || null,
        success: false,
        status,
      });

    case 411:
      return handleData({
        code: status,
        message: "error:411",
        data: data || null,
        success: false,
        status,
      });
    case 412:
      return handleData({
        code: status,
        message: "error:412",
        data: data || null,
        success: false,
        status,
      });

    case 413:
      return handleData({
        code: status,
        message: "error:413",
        data: data || null,
        success: false,
        status,
      });
    case 414:
      return handleData({
        code: status,
        message: "error:414",
        data: data || null,
        success: false,
        status,
      });
    case 415:
      return handleData({
        code: status,
        message: "error:415",
        data: data || null,
        success: false,
        status,
      });
    case 416:
      return handleData({
        code: status,
        message: "error:416",
        data: data || null,
        success: false,
      });
    case 417:
      return handleData({
        code: status,
        message: "error:417",
        data: data || null,
        success: false,
        status,
      });
    case 500:
      return handleData({
        code: status,
        message: "error:500",
        data: data || null,
        success: false,
        status,
      });
    case 501:
      return handleData({
        code: status,
        message: "error:501",
        data: data || null,
        success: false,
        status,
      });
    case 502:
      return handleData({
        code: status,
        message: "error:502",
        data: data || null,
        success: false,
        status,
      });
    case 503:
      return handleData({
        code: status,
        message: "error:503",
        data: data || null,
        success: false,
      });
    case 504:
      return handleData({
        code: status,
        message: "error:504",
        data: data || null,
        success: false,
        status,
      });
    case 505:
      return handleData({
        code: status,
        message: "error:505",
        data: data || null,
        success: false,
        status,
      });

    default:
      if (status > 503) {
        return handleData({
          code: status,
          message: "Server down",
          data: data || null,
          success: false,
          status,
        });
      }
      if (status < 500 && status >= 400) {
        return handleData({
          code: status,
          message: "Error request",
          data: data || null,
          success: false,
          status,
        });
      }
      return handleData({
        code: status,
        message: "Error on handle",
        data: data || null,
        success: false,
        status,
      });
  }
};
