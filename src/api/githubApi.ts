import axios from "axios";

const githubApi = axios.create(
  {
    baseURL: "https://api.github.com/",
    headers: { "Content-Type": "application/json" },
    // timeout: 5000
  }
);


githubApi.interceptors.request.use(config => {
  // config.withCredentials = true;
  return config;
});



githubApi.interceptors.response.use(response => {
  console.log(`${response.status} -> 取得成功`);
  return response;
}, error => {
  if (error.response) {
    switch (error.response.status) {
    case 404:
      console.log("404 -> 你要找的頁面不存在，檢查網址有沒有錯誤");
      break;
    case 500:
      console.log("500 -> 後端程式發生問題，檢查後端有沒有錯誤");
      break;
    default:
      console.log(error.message);
    }
  }
  return Promise.reject(error.message);
});

export default githubApi;