<script lang="ts">
import { useTmpiniaStore } from "@/uni_modules/tmui/tool/lib/tmpinia";

export default {
  onLaunch: async function () {
    const store = useTmpiniaStore();
    store.setTmVuetifyDark(false); // 设置暗黑模式

    // 判断是否是登录状态
    uni.getStorage({
      key: "person",
      success() {
        // uni.reLaunch({ url: "/pages/index/index" });
      },
      fail(e) {
        console.log(e);
        uni.reLaunch({ url: "/pages/login/index" });
      },
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "./uni_modules/vk-uview-ui/index.scss";
/* #ifdef APP-NVUE */
@import "./uni_modules/tmui/scss/nvue.css";
/* #endif */
/* #ifndef APP-NVUE */
@import "./uni_modules/tmui/scss/noNvue.css";
/* #endif */
/*每个页面公共css */
</style>
