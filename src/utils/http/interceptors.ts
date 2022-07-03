import axios, { AxiosInstance } from "axios";
import qs from 'qs';
import { AxiosRequestConfig } from './enum';
import handleResponse from './handleResponse';
import handleError from './handleError';
import baseURL from './baseURL';

export class Interceptors {
  instance: AxiosInstance;
  config: AxiosRequestConfig = {};
  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 30000,
      withCredentials: true,
    });
    this.init();
  }
  // 初始化拦截器
  init() {
    // 请求接口拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (config.url?.indexOf('/shop/distribution') !== -1 || config.url?.indexOf('/console/auth') !== -1) {
          config.data = qs.stringify(config.data)
        }
        if (config.method === 'get') {
          config.paramsSerializer = function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
          }
        }
        return config;
      },
      (err) => {
        console.error(err);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => handleResponse(response, this.config),
      (error) => handleError(error)
    );
  }

  getInterceptors(config: AxiosRequestConfig) {
    this.config = config;
    return this.instance;
  }
}