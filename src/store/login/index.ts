// import { loginUser, logoutUser, bindWx } from "@/services/login";
import { defineStore } from 'pinia';

// ts 不会直接as any 就能解决
export const useLogin = defineStore('login', {
  state: () => ({
    person: null,
  }),
  actions: {
    async login(/* 参数params */) {
      // 登录请求
      // const res = await loginUser(params);
      const res = {} as any;
      uni.setStorageSync('token', res?.token);
      uni.setStorageSync('unionId', res?.unionId);
      uni.setStorageSync('person', JSON.stringify(res));

      return res;
    },
    async logout() {
      // 登出请求
      // await logoutUser();
      uni.clearStorage();
      uni.clearStorageSync();
      uni.reLaunch({
        url: '/pages/login/index',
      });
    },
  },
});
