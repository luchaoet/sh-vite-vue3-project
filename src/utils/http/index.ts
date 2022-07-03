import { AxiosPromise, AxiosResponse } from "axios";
import { Interceptors } from "./interceptors";
import { App } from 'vue';
import { AxiosRequestConfig } from './enum'

const request = (config: AxiosRequestConfig): AxiosPromise => {
  const axios = new Interceptors().getInterceptors(config);
  const url = config.url || '';
  const data = config.data || {};
  const http = config?.method?.toLowerCase() === 'post'
    ? axios.post(url, data)
    : axios.get(url, { params: data });

  return new Promise((resolve, reject) => {
    http.then((res: AxiosResponse) => {
      resolve(res);
    }).catch((err: any) => {
      reject(err)
    });
  });
}


export const axiosPlugin = {
  install(app: App) {
    app.config.globalProperties.$axios = request;
  },
};

export default request;