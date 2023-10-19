<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
    
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://drive.google.com/uc?export=download&id=19tW_mDuFxbYFeP3HyHUwzRZCrimkFz0c",
    ],
    title: "多元登入方式",
    text: "提供了本地登入帳戶與Google第三方登入的方式，且本地帳戶會針對密碼進行加鹽雜湊才會寫入資料庫，大大提升了密碼安全性，同時也引入了Google reCAPTCHA驗證系統，可以區分真實用戶與機器人",
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1wWD5LL_IQh1Jd1ChATSQJ8CVVsuJnLG9",
    ],
    title: "快速的註冊方式",
    text: "採用了註冊本地帳號或是使用Google帳號註冊的方式，讓使用者可以快速註冊，並且會針對使用者輸入的資料來進行格式驗證，不符合要求格式則無法進行下一步"
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1wvtiOJ22sS2xfyJuqOOgF8Mdjhyyq5nh",
    ],
    title: "簡單的資料維護",
    text: "本系統提供了修改資料的介面，使用者可以透過此介面來修改自己填寫的資料，讓使用者在修改資料時更加方便快速，當然也會對使用者輸入的資料進行驗證，確保資料的正確性"
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=15LsnDaT1i9oQDUDbcM_ncA8A1OICxngP",
    ],
    title: "提供登入紀錄",
    text: "提供了您最近入的時間，如果發現在沒有印象的時間進行登入，可以及時採取行動，避免帳號被惡意使用"
  },
  {
    img: [
      "https://drive.google.com/uc?export=download&id=1aLkF9IYdkqEBZyDFHYPOwzXHmMU-FJJH",
    ],
    title: "任何人都有機會成為老師",
    text: "只要您有任何專業能力，並且熱衷於教導他人，可以到申請成為老師的頁面來填寫資料，通過審核後將能開始開設課程",
  },
];
</script>
    
<style scoped></style>