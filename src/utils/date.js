function timestampToTime(
  timestamp,
  params = {
    year: true,
    month: true,
    day: true,
    hour: false,
    minute: false,
    second: false,
  },
) {
  if (!timestamp) return "";
  let date = new Date(timestamp * 1000); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + "-";
  let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
  let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hh = " " + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours());
  let mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let answer = "";
  if (params?.year) answer += Y;
  if (params?.month) answer += M;
  if (params?.day) answer += D;
  if (params?.hour) answer += hh + "时";
  if (params?.minute) answer += mm + "分";
  if (params?.second) answer += ss + "秒";
  return answer;
}

export default timestampToTime;
