import { ElMessage } from 'element-plus'
export default function handleError(error: any) {
  const message = error.message;
  const { status, statusText: _statusText, data = {} } = error?.response || {};
  let statusText = data?.message || _statusText || error;

  if (/timeout of \d+ms exceeded/.test(message)) {
    statusText = '请求超时，请稍后重试';
  } else if (status === 500) {
    statusText = '网络异常，请稍后重试';
  }

  ElMessage({
    message: statusText,
    type: 'error',
    grouping: true,
  })

  const err = {
    success: false,
    msgCode: '',
    message: '',
  };
  return Promise.resolve(err);
}