<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/DescCard.vue";

const descData = [
  {
    img: [
      "https://i.imgur.com/GBI65mm.webp",
    ],
    title: "首頁",
    text: "首頁使用AJAX技術從Github API取得資料，並把它處理成容易觀看的樣式，讓使用者可以簡單地吸收這些資訊",
  },
  // {
  //   img: [
  //     "https://i.imgur.com/KtYt3GU.jpg",
  //   ],
  //   title: "選擇喜歡的排序方式",
  //   text: "提供了本地登入帳戶與Google第三方登入的方式，且本地帳戶會針對密碼進行加鹽雜湊才會寫入資料庫，大大提升了密碼安全性，同時也引入了Google reCAPTCHA驗證系統，可以區分真實用戶與機器人",
  // },
  {
    img: [
      "https://i.imgur.com/h8Z0fqh.webp",
    ],
    title: "精選專案介紹",
    text: "這邊挑選了幾個對我來說很重要的專案，這些專案代表我學習歷程上獲得的經驗，未來也會持續更新",
  },
  {
    img: [
      "https://i.imgur.com/GxUWYZq.webp",
      "https://i.imgur.com/fJgSrbi.webp",
      "https://i.imgur.com/qLyPX3H.webp",
    ],
    title: "響應式網頁設計(RWD)",
    text: "為了讓不同大小的裝置都能順利瀏覽，針對小螢幕有進行優化，讓使用者也能透過小螢幕瀏覽本網站"
  },
  {
    img: [
      "https://i.imgur.com/Ow7eo2g.webp",

    ],
    title: "美觀的畫面設計",
    text: "本網站的主色調採用藍黑色，可以讓觀看者的眼睛更加舒服，並且在排版上也更加簡潔，讓使用者可以快速地理解網站的內容"
  },
  {
    img: [
      "https://i.imgur.com/O5E8D51.webp",
    ],
    title: "可重複利用的組件",
    text: "使用了Vue框架的優點，讓開發人員可以更快速的開發，並且重複利用組件，讓開發效率大幅提高"
  },
  {
    img: [
      "https://i.imgur.com/bIEwDRD.webp",
    ],
    title: "圖片瀏覽器",
    text: "只要點擊介紹文字附帶的的圖片，就可以點擊並放大的圖片內容，讓使用者可以看得更加清晰"
  }

];
</script>
      
<style scoped></style>