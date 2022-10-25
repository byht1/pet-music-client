import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";

// const server = axios.create({
//   baseURL: "http://localhost:5000",
// });

export const token = {
  PLUS: "token",
  DELETE: "delete",

  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// http://localhost:5000

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      header?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, header }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });

      if (header === "token") {
        token.set(result.data.token);
      }

      if (header === "delete") {
        token.unset();
      }

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
