import { REQ_TIMEOUT_DEFAULT } from "@/utils/constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const getAuth = (): string | undefined => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("auth")) {
    const token = localStorage.getItem("auth") as string;
    return `Bearer ${token}`;
  }
  return undefined;
};

const setAuth = (response: AxiosResponse) => {
  if (
    response.data?.accessToken &&
    typeof response.data.accessToken === "string"
  ) {
    const token: string = response.data.accessToken;
    typeof localStorage !== "undefined" && localStorage.setItem("auth", token);
  }
};

const baseHeaders = (): any => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: getAuth(),
  };
};

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  timeout: process.env.NEXT_PUBLIC_API_REQ_TIMEOUT
    ? Number(process.env.NEXT_PUBLIC_API_REQ_TIMEOUT)
    : REQ_TIMEOUT_DEFAULT,
  headers: baseHeaders(),
  validateStatus: function () {
    return true;
  },
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
  function (response) {
    setAuth(response);
    return response;
  },
  function (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(function (
  config: AxiosRequestConfig
): any {
  const headers = config.headers || {};
  config.headers = { ...headers, ...baseHeaders() };
  return config;
});

export { axiosInstance as axiosClient, axiosConfig };
