import type { Axios, AxiosError, AxiosRequestConfig, Method } from "axios";
import axios from "axios";

export class BaseService {
  private axios: Axios;

  constructor(
    baseURL: string,
    private config?: () => AxiosRequestConfig,
    private onError?: (error: AxiosError) => void
  ) {
    this.axios = axios.create({
      baseURL,
    });
  }

  async get(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request("get", url, undefined, { ...config, params: data });
  }

  async post(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request("post", url, data, config);
  }

  async put(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request("put", url, data, config);
  }

  async patch(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request("patch", url, data, config);
  }

  async delete(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.request("delete", url, data, config);
  }

  async request(
    method: Method,
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ) {
    try {
      const result = await this.axios.request({
        ...config,
        ...this.config?.(),
        url,
        method,
        data,
        headers: { ...config?.headers, ...this.config?.()?.headers },
      });
      return result.data;
    } catch (e: unknown) {
      const error = e as AxiosError<{ message: string }>;
      this.onError?.(error);
      throw error;
    }
  }
}
