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

<script setup lang="ts">
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
.content {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	position: relative;
	.top {
		width: 100%;
		height: 30%;
		color: white;
		background-color: #3c9afc;
		display: flex;
		padding-top: 10%;
		justify-content: center;
		border-radius: 0 0 20px 20px;
	}
	.login-container {
		height: 45%;
		width: 92%;
		position: relative;
		bottom: 12%;
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 5px 14px rgba(51, 102, 255, 0.24);
		border: 1px solid rgba(51, 102, 255, 0.24);
		.login-top {
			width: 100%;
			height: 25%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.login-form {
			padding: 1rem;
			width: 100%;
			height: 45%;
		}
		.login-bottom {
			width: 100%;
			height: 30%;
			padding: 1rem;
		}
	}
}
</style>
