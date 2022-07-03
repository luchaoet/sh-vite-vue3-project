import { typeBy } from '@/utils'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router'
import type { Action } from 'element-plus'

let isOpen = false;

export default function handleResponse(response: any, config: any) {
  const res = response.data;
  const hiddenMessage = config?.hiddenMessage || false;
  const _hiddenMessage =
    typeBy(hiddenMessage) === 'boolean' && hiddenMessage === true ||
    typeBy(hiddenMessage) === 'array' && (hiddenMessage as Array<string>).some((item: string) => item === res.msgCode || res.code);

  // 卡点限制提示
  if (res.msgCode === 'qianchuan.qianchuanRightInterestsCheck') {
    ElMessageBox.confirm(res.message || '继续创建需升级，是否升级？', "升级提示", {
      confirmButtonText: '立即升级',
      cancelButtonText: '暂不升级',
      type: "warning",
    }).then(() => {
      window.open('/workbench/pay/index/upgrade', '_blank')
    })
  }

  //未登录 本地环境不处理未登录
  if (res.msgCode === 'login.needLogin' && process.env.NODE_ENV === 'production') {
    if (!isOpen) {
      isOpen = true;
      ElMessageBox.alert('登录已失效，请登录后重试', '提示', {
        confirmButtonText: '登录',
        callback: (action: Action) => {
          isOpen = false;
          window.open(`/workbench/login`, '_blank');
        },
      })
    }
  }

  if (!res?.success && _hiddenMessage === false) {
    ElMessage({
      message: res.message || res.msgCode || '数据解析错误',
      type: 'error',
      grouping: true,
      duration: 3000,
      zIndex: 3000
    })
  }
  return Promise.resolve(res);
}