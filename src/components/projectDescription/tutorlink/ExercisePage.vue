<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/DescCard.vue";

const descData = [
  // "https://drive.google.com/uc?export=download&id=",
  {
    img: [
      "https://i.imgur.com/8LIB958.webp",
      "https://i.imgur.com/wXkhkeX.webp",
    ],
    title: "出色的出題系統",
    text: "當您第一次進入這個頁面時，會發現只有一個按鈕可以使用，點選之後將會動態出現對應的題目欄位，我們提供了三種題型給您選擇，分別是單選題、多選題與填充題，整張試卷可以隨著您的需求增加或減少題數與選項",
  },
  {
    img: [
      "https://i.imgur.com/lrbeRtU.webp",
    ],
    title: "詳細的習題設定",
    text: "習題設定能根據您的需求來進行調整，我們提供了習題類型，習題有效時間，答題計時，與完成後是否顯示答案等功能，讓您的每一張試卷都是與眾不同的",
  },
  {
    img: [
      "https://i.imgur.com/BJqbo7Q.webp",
    ],
    title: "幫助您減少出題上的失誤",
    text: "在您完成出題按下送出按鈕時，我們會先幫您進行初步的檢查，如選擇題是否沒有勾選任何答案或是試卷結束日期小於開始日期等等，讓您可以更專注於教學",
  },
  {
    img: [
      "https://i.imgur.com/Jgbui3S.webp",
    ],
    title: "易用的編輯功能",
    text: "我們提供了與新增習題時幾乎一樣的介面，讓您在更新任何題目時可以更有效率",
  },
  {
    img: [
      "https://i.imgur.com/Pvt05vn.webp",
      "https://i.imgur.com/3vyYjjx.webp",
      "https://i.imgur.com/mcdDWSP.webp",
      "https://i.imgur.com/wjTwIOT.webp",
      "https://i.imgur.com/XOdazqW.webp",
    ],
    title: "習題分享功能",
    text: "出完習題後，可以針對每位學生來給予不同試卷，也能針對不同學生分別調整出適合他們的設定檔，讓每位學生都能得到最適合他們的練習",
  },
  {
    img: [
      "https://i.imgur.com/68QBVQ5.webp",
      "https://i.imgur.com/O4kzBou.webp",
      "https://i.imgur.com/GatrJKY.webp",
      "https://i.imgur.com/FUnZqGc.webp",
    ],
    title: "學生答題系統",
    text: "學生在取得老師分享的試卷後可以進行填寫，在這裡會分成已完成、未完成與過期的習題，完成的試卷可以進入Q&A討論區、未完成的可以進入並填寫，而過期的試卷將無法進行任何操作",
  },
  {
    img: [
      "https://i.imgur.com/VUeiDFT.webp",
      "https://i.imgur.com/OKjxQlx.webp",
    ],
    title: "自動評分功能",
    text: "在按下交卷按鈕後，系統會在後端自動算出您的分數，並且讓您知道錯了哪些題目",
  },
  {
    img: [
      "https://i.imgur.com/I545D3g.webp",
      "https://i.imgur.com/pxNTjMB.webp",
      "https://i.imgur.com/QKPmpqy.webp",
    ],
    title: "針對試卷的Q&A系統",
    text: "當學生對於試卷的題目上有任何問題時，可以在答題完成之後進入試卷最下方的Q&A討論區發問，這裡匯集了所有針對這張習題卷的問題，並且可以與寫過這張習題的同學互相討論，也能由老師來回答疑問",
  },
];
</script>
      
<style scoped></style>