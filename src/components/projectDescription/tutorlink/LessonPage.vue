<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1z0-F-cO5LBvuucNRBcQU5MFBQnqCFQ79",
      "https://drive.google.com/uc?export=download&id=1yKZXLjp_2QL03ubpuobqyI4YP0rQQhe2",
    ],
    title: "提供線上課程與影音課程",
    text: "我們提通了兩種不同型態的上課方式給老師做選擇，老師可以透過線上課程的方式來直接與學生互動，也能通過預錄影片的方式來教導學生新的技能",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1er1AANtoGsQSqNxyW1201Lx3o7g52B42",
      "https://drive.google.com/uc?export=download&id=1F6Mh4LPyBGdRD5q_lq1jnfNjRvvpAZDC",
    ],
    title: "成為老師來提供課程",
    text: "當您通過我地的教師資格審核之後，就可以上架您想要教導的課程，通過CKEditor製作編輯介紹，可以讓您的課程介紹更加直覺與美觀",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1Njn3umOF3iI7PWTBkA_q40DvGYfbg6Yn",
      "https://drive.google.com/uc?export=download&id=1IyzuNrDL_HlmpO6_d9EtQneOCnha83BQ",
    ],
    title: "快速查看您的課程",
    text: "當您登入我們的系統之後，就能直接看到課程管理頁面，可以一目瞭然的查看並編輯",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1USRQm5MEpP_v5IFiGGYu6rmnUHPU_oyS",
      "https://drive.google.com/uc?export=download&id=1wLKqjirCLMzbkAa8FnpBpCSqSlkoxBDB",
    ],
    title: "編輯您的課程",
    text: "我們提供了與新增課程時幾乎一樣的介面，讓您在更新課程資訊時可以更有效率",
  },

];
</script>
      
<style scoped></style>