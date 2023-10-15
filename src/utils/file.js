import { upFile1, querySTS } from "@/api/request/upload";

// 获取文件名尾缀
export const getExt = (path) => {
  return path?.split(".").pop();
};

export const uploadFile = async (url, params = {}) => {
  const { tempFilePaths, formData, success, fail, index = 0 } = params;
  if (tempFilePaths.length === index) return;

  const { data } = await querySTS(url, formData);

  // 读取二进制文件
  uni.getFileSystemManager().readFile({
    filePath: tempFilePaths[index],
    success: (res) => {
      const binaryData = res.data;

      // 通过oss拿到上传链接后 进行把二进制数据上传，并且提供两个回调函数
      upFile1(data.uploadUrl, binaryData, {
        success: () => {
          success(data);
        },
        fail: () => {
          uni.showToast({
            icon: "error",
            title: "网络错误！",
            duration: 3000,
          });
          fail(data);
        },
      });
    },
  });
};
