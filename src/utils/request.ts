import { handleAxios } from "@/utils/request-helper";
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL ?? "";
const TIME_OUT_API = parseInt(process.env.TIME_OUT_API ?? "0", 10);
const KEY = process.env.REACT_APP_KEY ?? "";

export const axiosBaseQuery =
  (baseUrl = BASE_URL || "") =>
  async ({
    url,
    method,
    data,
    params,
  }: {
    url?: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  }) => {
    try {
      const defaultConfig: AxiosRequestConfig = {
        baseURL: baseUrl,
        timeout: TIME_OUT_API,
        headers: {
          "Content-Type": "application/json",
          // TODO: oauth2 & lang
          Authorization: `Basic ${KEY}`,
        },
      };
      const result = (await Axios.request({
        ...defaultConfig,
        method,
        data,
        params,
        url: `${baseUrl + url}`,
      })) as AxiosRequestConfig;

      return handleAxios(result as AxiosError & AxiosResponse);
    } catch (axiosError) {
      const err = axiosError as AxiosError & AxiosResponse;
      //   const code = err.response?.status;
      /**
       * Dispatch api error code to store
       * Open ApiError modal
       * Just show error with POST method
       */
      //   if (method === 'POST') {
      //     store?.dispatch(setApiError({ code } as IError));
      //   }
      return handleAxios(err);
    }
  };
