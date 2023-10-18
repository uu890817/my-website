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
    text: "待寫",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1er1AANtoGsQSqNxyW1201Lx3o7g52B42",
      "https://drive.google.com/uc?export=download&id=1F6Mh4LPyBGdRD5q_lq1jnfNjRvvpAZDC",
    ],
    title: "成為老師來提供課程",
    text: "待寫",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1Njn3umOF3iI7PWTBkA_q40DvGYfbg6Yn",
      "https://drive.google.com/uc?export=download&id=1IyzuNrDL_HlmpO6_d9EtQneOCnha83BQ",
    ],
    title: "快速查看您開設的課程",
    text: "待寫",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1USRQm5MEpP_v5IFiGGYu6rmnUHPU_oyS",
      "https://drive.google.com/uc?export=download&id=1wLKqjirCLMzbkAa8FnpBpCSqSlkoxBDB",
    ],
    title: "編輯您的課程",
    text: "待寫",
  },

];
</script>
      
<style scoped></style>