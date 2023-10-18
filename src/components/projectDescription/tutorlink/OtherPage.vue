<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://cdn.discordapp.com/attachments/1158784930596266055/1158786626202370159/TutorLink-Home.webp",
      // "https://drive.google.com/uc?export=download&id=1wLKqjirCLMzbkAa8FnpBpCSqSlkoxBDB",
    ],
    title: "待編輯",
    text: "待編輯",
  },
];
</script>
      
<style scoped></style>