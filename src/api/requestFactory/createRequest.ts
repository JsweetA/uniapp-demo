import Fly from "flyio/dist/npm/wx";

import { API, REQUEST } from "@/types/index";

const fly = new Fly();

export default (getBaseUrl: () => string) => {
  return <T>(req: API.ReqType): T => {
    const { url, data, method = API.Methods.GET, headers = {}, callback } = req;
    const baseUrl = getBaseUrl();
    return new Promise((resolve, reject) => {
      fly
        .request(`${baseUrl}${url}`, data, {
          method,

          headers: {
            "content-type": "application/json",
            accept: "*/*",
            ...headers,
            // env: "dev",
            token: uni.getStorageSync("token"),
          },
        })
        .then((res: any) => {
          const data = (res?.data ? res?.data : res) as API.ResType;
          if (data?.code !== REQUEST.NORMAL) {
            reject(data);
          }
          resolve(data);
        })
        .catch((e: any) => {
          callback && callback(e);
          reject({ ...e });
        });
    }).catch((e) => {
      const { TOKEN_ERROR, ERROR_401, ERROR_400, ERROR_500 } = REQUEST;
      let msg = e?.msg;
      const code = e?.code || e?.status;

      if (e?.status) {
        code === ERROR_401 && (msg = "请求错误：操作未授权");
        code >= ERROR_400 && code < ERROR_500 && (msg = "请求错误：客户端错误");
        code >= ERROR_500 && (msg = "请求错误：服务端错误");
        msg += `（${code}）`;
        console.log("httperror", e);
      }

      uni.showToast({
        icon: "none",
        title: `${msg}` || `请求失败:${code}`,
        duration: 3000,
        mask: true,
      });
      if (code >= TOKEN_ERROR) {
        setTimeout(() => {
          uni.removeStorageSync("token");
          uni.reLaunch({
            url: "/pages/login/index",
          });
        }, 2000);
      }

      // 抛出错误阻止后续事件
      throw new Error(JSON.stringify(e));
    }) as T;
  };
};
