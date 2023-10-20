<template>
  <DescCard :data="data" :cardStyle="index % 2" v-for="(data, index) in descData" :key="index" />
</template>
      
<script setup lang='ts'>
import DescCard from "@/components/projectDescription/tutorlink/DescCard.vue";

const descData = [
  {
    img: [
      "https://i.imgur.com/JvnRzNs.jpg",
    ],
    title: "喜歡 就加入購物車吧!",
    text: "當看到喜歡的課程時，除了可以按下收藏之外，也可以直接加入到購物車之中，",
  },
  {
    img: [
      "https://i.imgur.com/Sp1ZvjK.jpg",
    ],
    title: "詳細的購買介面",
    text: "購物車內容會顯示您加入的所有課程，並且可以在這裡直接選擇要購買的課堂數量與時間，也可以輕鬆地刪除不想要的課程",
  },
  {
    img: [
      "https://i.imgur.com/ZKYQWpI.jpg",
      "https://i.imgur.com/zOkCZt6.jpg",
    ],
    title: "支援第三方支付",
    text: "我們提供了綠界這個第三方的支付平台來讓使用者們可以輕鬆使用信用卡、超商繳費等方式來購買喜歡的課程",
  },
  {
    img: [
      "https://i.imgur.com/ISAp0Yz.jpg",
      "https://i.imgur.com/Mn63tsu.jpg",
    ],
    title: "查看您的訂單",
    text: "購買完成後，可以進入訂單詳情中，來查看歷史的交易紀錄或是退款紀錄",
  },
];
</script>
      
<style scoped></style>