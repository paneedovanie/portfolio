export class BaseService {
  constructor(private baseURL: string) {}

  async get(url: string, config?: RequestInit) {
    return this.request("get", this.baseURL + url, undefined, config);
  }

  async post(url: string, data?: BodyInit, config?: RequestInit) {
    return this.request("post", url, data, config);
  }

  async put(url: string, data?: BodyInit, config?: RequestInit) {
    return this.request("put", url, data, config);
  }

  async patch(url: string, data?: BodyInit, config?: RequestInit) {
    return this.request("patch", url, data, config);
  }

  async delete(url: string, data?: BodyInit, config?: RequestInit) {
    return this.request("delete", url, data, config);
  }

  async request(
    method: string,
    url: string,
    data?: BodyInit,
    config?: RequestInit
  ) {
    const result = await fetch(url, { method, body: data, ...config });
    return result.json();
  }
}
