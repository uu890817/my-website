<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://i.imgur.com/4MXgGX5.jpg",
      "https://i.imgur.com/J3lphvw.jpg",
    ],
    title: "提供線上課程與影音課程",
    text: "我們提通了兩種不同型態的上課方式給老師做選擇，老師可以透過線上課程的方式來直接與學生互動，也能通過預錄影片的方式來教導學生新的技能",
  },
  {
    img: [
      "https://i.imgur.com/ZN2QwAQ.jpg",
      "https://i.imgur.com/CDsRocF.jpg",
    ],
    title: "成為老師來提供課程",
    text: "當您通過我地的教師資格審核之後，就可以上架您想要教導的課程，通過CKEditor製作編輯介紹，可以讓您的課程介紹更加直覺與美觀",
  },
  {
    img: [
      "https://i.imgur.com/3emQgvE.jpg",
      "https://i.imgur.com/gI6A18J.jpg",
    ],
    title: "快速查看您的課程",
    text: "當您登入我們的系統之後，就能直接看到課程管理頁面，可以一目瞭然的查看並編輯",
  },
  {
    img: [
      "https://i.imgur.com/T25Q6hL.jpg",
      "https://i.imgur.com/Bl12Alh.jpg",
    ],
    title: "編輯您的課程",
    text: "我們提供了與新增課程時幾乎一樣的介面，讓您在更新課程資訊時可以更有效率",
  },

];
</script>
      
<style scoped></style>