<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://i.imgur.com/KNrFX1A.jpg",
    ],
    title: "熱門的精選主題",
    text: "打開首頁，您將會看到我們推薦的課程資訊，不管是線上課程還是影音課程，這邊總有一堂你會想上的課",
  },
  {
    img: [
      "https://i.imgur.com/nctlfgk.jpg",
    ],
    title: "一目了然的行事曆系統",
    text: "如果您是學生，行事曆將會顯示您購買的課程時間，如果您是老師，將會顯示您接下來要授課的課程與您有購買的課程時間段",
  },
  {
    img: [
      "https://i.imgur.com/UFb3yMZ.jpg",
      "https://i.imgur.com/PSKpB4x.jpg",
    ],
    title: "好用的課程搜尋系統",
    text: "搜尋系統使用了模糊搜尋來尋找最符合您的結果，您只需要輸入幾個字，我們將給您最完整的結果",
  },
  {
    img: [
      "https://i.imgur.com/42yXMgP.jpg",
    ],
    title: "好評推薦",
    text: "這裡顯示了最近發表的評論內容，讓學生們在選課時有一些參考標準",
  },
];
</script>
      
<style scoped></style>