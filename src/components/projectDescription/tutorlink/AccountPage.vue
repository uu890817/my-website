<template>
    <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
    
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDo1o8WnLhi6MFb6B13u-J9xxbVaWcpmF_NP70Cr9L1EYMSktj_2AfXYAK-zuMZKJ3YpA-TXyr8u43ROeBrmanQcxLqJw=w2560-h926",
    title: "多元登入方式",
    text: "提供了本地登入帳戶與Google第三方登入的方式，且本地帳戶會針對密碼進行加鹽後雜湊再寫入資料庫，大大提升了密碼安全性，同時也引入了Google reCAPTCHA驗證系統，可以區分真實用戶與機器人",
  },
  {
    img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBur3qXR3o4OYPaRZB0QJ7Hh1gyfzJ0sc8084fdcI6huOFdvf7ADqHMfPa4XrlWiemlsNlxcwn0srg2lsVrkHNpoYvGRQ=w2560-h926",
    title: "快速的註冊方式",
    text: "採用了註冊本地帳號或是使用Google帳號註冊的方式，讓使用者可以快速註冊，並且會針對使用者輸入的資料來進行格式驗證，不符合要求格式則無法進行下一步"
  },
  {
    img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCqG8CnNy3glLq9rr7Ks5Xn9dhsbrYyp5s6yCH5UxK1-5ORqp8NRKJnyGAgFoNfoYuCVkd1TU7c8OHHqiT47-7jknf7cg=w2560-h926",
    title: "簡單的資料維護",
    text: "本系統提供了修改資料的介面，使用者可以透過此介面來修改自己填寫的資料，讓使用者在修改資料時更加方便快速，當然也會對使用者輸入的資料進行驗證，確保資料的正確性"
  },

  {
    img: "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBMDWtnM-OebjdxYS3TQSyf7QfiXtLj6l2dOmBno-qDaoqNPbrSrJh4f1ub4DnpCQm-5zCp4i593-wMVN-A7j57-S9zSQ=w2560-h926",
    title: "任何人都有機會成為老師",
    text: "只要您有任何專業能力，並且熱衷於教導他人，可以到申請成為老師的頁面來填寫資料，通過審核後將能開始開設課程",
  },
];
</script>
    
<style scoped></style>