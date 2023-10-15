<template>
  <tm-app>
    <view class="content">
      <view class="top">
        <!-- <tm-text :font-size="60" label="登录" color="#fff"></tm-text> -->
      </view>
      <view class="login-container">
        <view class="login-top">
          <tm-text :font-size="50" label=" " color="#349EFC"></tm-text>
        </view>
        <view class="login-form">
          <tm-input
            v-model="login.key"
            prefixColor="primary"
            prefix="tmicon-user-fill"
            :transprent="true"
            placeholder="请输入账号"
          ></tm-input>
          <tm-divider></tm-divider>
          <tm-input
            v-model="login.value"
            prefixColor="primary"
            password
            prefix="tmicon-lock-fill"
            :transprent="true"
            placeholder="请输入密码"
          ></tm-input>
          <tm-divider></tm-divider>
        </view>
        <view class="login-bottom">
          <tm-button
            :linear-color="['#00BBFF', '#3C9AFC']"
            linear="left"
            block
            label="立即登录"
            :round="10"
            @click="handleLogin"
          ></tm-button>
        </view>
      </view>
    </view>
  </tm-app>
</template>

<script setup>
import { reactive } from "vue";
import { useLogin } from "@/store/login";

const store = useLogin();
const login = reactive({
  key: "",
  value: "",
});

const handleLogin = async () => {
  const res = await store?.login(login);
  res &&
    uni.reLaunch({
      url: "/pages/home/index",
    });
};
</script>

<style scoped lang="scss">
@import "./index";
</style>
