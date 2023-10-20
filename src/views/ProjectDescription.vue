<template>
  <div class="projectWrap animate__animated animate__bounceInRight">
    <div v-for="project in projects" :key="project.id">
      <DescriptionCard :data="project" />
    </div>


  </div>
</template>
    
<script setup lang='ts'>
import DescriptionCard from "@/components/projectDescription/DescriptionCard.vue";









const projects = [
  {
    id: 1,
    name: "TutorLink 家教平台",
    description: "這個專案基於 Spring Boot 框架開發，旨在透過科技的力量實現家教和學生之間的連接，為他們提供更好的學習環境和更廣泛的學習機會。這個家教網平台將匯集優秀的家教師資源和學習資源，並通過智能配對系統將合適的家教師與學生相互連接。這將為學生們提供個性化的學習計劃和指導，幫助他們在學業上取得更好的成績和發展。",
    img: "https://i.imgur.com/ciZT8HI.jpg",
    link: "tutorlink"
  },
  {
    id: 2,
    name: "Yu's Website",
    description: "Yu's Website 也就是本網頁，基於Vue3+TypeScript開發，",
    img: "https://i.imgur.com/yWzc8fY.jpg",
    link: "yuwebsite"
  },
  // {
  //   id: 3,
  //   name: "Discord Bot - Minecraft伺服器管理助手",
  //   description: "這是一個使用Java相關技術所開發的Discord機器人，主要用途為協助管理Minecraft伺服器，在Discord頻道內具有查看CPU記憶體等硬體使用量、目前遊戲內線上人數與伺服器版本等功能",
  //   img: "https://picsum.photos/500/500",
  //   link: ""
  // },
  // {
  //   id: 4,
  //   name: "Yu Viewer",
  //   description: "一個圖片瀏覽器",
  //   img: "https://picsum.photos/500/500",
  //   link: ""
  // },
];
</script>

<style scoped>
.projectWrap {
  width: 70%;
  height: 100%;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
  display: block;
  border-width: 1px;
  border-style: solid;
  border-color: #3b3b51;
  border-radius: 5px;
  background-color: #2b2b36;
}
</style>