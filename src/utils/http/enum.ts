import { AxiosRequestConfig as RequestConfig } from "axios";

type AxiosRequestConfig = {
  hiddenMessage?: Boolean | Array<string>
} & RequestConfig;

interface Pager {
  currentPage: number;
  endRow: number;
  limit: number;
  offset: number;
  pageSize: number;
  startRow: number;
  total: number;
  totalPage: number;
}

interface Response {
  code: string;
  data: Array<any> | object | null;
  message: string | null;
  msgCode: string;
  pager: null | Pager;
  requestId: string;
  success: Boolean;
}

export {
  AxiosRequestConfig,
  Response
}