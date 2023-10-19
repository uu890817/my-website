<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="tutorlinkWrap animate__animated animate__zoomIn">
    <n-carousel autoplay draggable>
      <img class="carousel-img" v-for="(img, index) in carouselImg" :key="index" :src="img.img" :interval="3000"
        v-viewer />
    </n-carousel>

    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="info-point" class="point" />
    <n-space id="infomation" class="article-deviation" style="margin-top:20px; border-width: 0;" vertical>
      <n-space style="font-size: 24px;">
        <n-icon style="vertical-align: sub;">
          <Sparkles />
        </n-icon>專案簡介
      </n-space>
    </n-space>

    <p style="margin:10px 20px; line-height: 1.5;">
      這個專案基於 Spring Boot
      框架開發，旨在透過科技的力量實現家教和學生之間的連接，為他們提供更好的學習環境和更廣泛的學習機會。這個家教網平台將匯集優秀的家教師資源和學習資源，並通過智能配對系統將合適的家教師與學生相互連接。這將為學生們提供個性化的學習計劃和指導，幫助他們在學業上取得更好的成績和發展。
    </p>
    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="technology-point" class="point" />
    <n-space id="mainTechnology" class="article-deviation" style="margin-top:20px; border-width: 0;" vertical>
      <n-space style="font-size: 24px;">
        <n-icon style="vertical-align: sub;">
          <BuildOutline />
        </n-icon>主要開發技術
      </n-space>

      <n-space style="margin:10px 20px;" justify="space-between">
        <div style="width:100px; padding:10px 10px 0 10px; border-width: 0;" v-for="data in useTechnology"
          :key="data.name">
          <img :src="data.icon" style="width: 100px; height: 100px;">
          <n-space justify="center" style="padding-top: 10px;">
            <a :href="data.link" target="_blank">{{ data.name }}</a>
          </n-space>
        </div>
      </n-space>

    </n-space>

    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="mainSystem-point" class="point" />
    <n-space id="mainSystem" class="article-deviation" style="margin-top:30px; font-size: 24px; font-weight: bold;">
      <n-icon style="vertical-align: sub; ">
        <CodeSlash />
      </n-icon>主要系統介紹
    </n-space>

    <n-tabs default-value="account" justify-content="space-evenly" type="line" animated style="margin-top:20px;">
      <n-tab-pane name="account" tab="　　會員系統　　">
        <div style="padding: 0 20px 0 20px">
          <DeveloperCard :datas="accountDeveloper" />
          <AccountPage />
        </div>
      </n-tab-pane>
      <n-tab-pane name="lessons" tab="　　課程系統　　">
        <div style="padding: 0 20px 0 20px">
          <DeveloperCard :datas="lessonDeveloper" />
          <LessonPage />
        </div>
      </n-tab-pane>
      <n-tab-pane name="exercise" tab="　　學習系統　　">
        <div style="padding: 0 20px 0 20px">
          <DeveloperCard :datas="exerciseDeveloper" />
          <ExercisePage />
        </div>
      </n-tab-pane>
      <n-tab-pane name="shop" tab="　　商城系統　　">
        <div style="padding: 0 20px 0 20px">
          <DeveloperCard :datas="shopDeveloper" />
          <ShopPage />
        </div>
      </n-tab-pane>
      <n-tab-pane name="other" tab="　　課程輔助系統　　">
        <div style="padding: 0 20px 0 20px">
          <DeveloperCard :datas="othereDeveloper" />
          <OtherPage />
        </div>
      </n-tab-pane>

    </n-tabs>

    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="developers-point" class="point" />
    <n-space id="developers" class="article-deviation" style="margin-top:30px; font-size: 24px; font-weight: bold;">
      <n-icon style="vertical-align: sub; ">
        <PeopleSharp />
      </n-icon>參與開發者
    </n-space>


    <n-space style="margin:10px 20px;" justify="space-between">
      <div style="width:100px; padding:10px 10px 0 10px; border-width: 0;" v-for="data in developers" :key="data.name">
        <img :src="data.img" style="width: 100px; height: 100px;">
        <n-space justify="center" style="padding-top: 10px;">
          <a :href="`https://github.com/${data.name}`" target="_blank">{{ data.name }}</a>
        </n-space>
      </div>
    </n-space>

    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="github-point" class="point" />
    <n-space id="github" class="article-deviation" style="margin-top:30px; font-size: 24px; font-weight: bold;">
      <n-icon style="vertical-align: sub; ">
        <LogoGithub />
      </n-icon>專案原始碼
    </n-space>

    <div class="github">

      <n-card class="github-left" style="background;background: #282835;" hoverable>
        <span class="github-name"><a href="https://github.com/uu890817/">uu890817</a> / <a
            href="https://github.com/uu890817/TutorLink-SpringBoot">TutorLink-SpringBoot</a> (後端)</span>
        <n-space justify="end">
          <n-tag :bordered="false" :color="{ color: '#493541', textColor: '#d48cb9', borderColor: '#1e496f' }" round
            style="vertical-align: bottom;">
            Java
          </n-tag>
        </n-space>

      </n-card>
      <n-card class="github-right" style="background;background: #232e2c;" hoverable>
        <span class="github-name"><a href="https://github.com/jenny3417/">jenny3417</a> / <a
            href="https://github.com/jenny3417/tutorlink-vue">tutorlink-vue</a> (前端)</span>
        <n-space justify="end">
          <n-tag :bordered="false" type="success" round style="vertical-align: bottom;">
            Vue
          </n-tag>
          <n-tag :bordered="false" :color="{ color: '#5b4a32', textColor: '#d4c78c', borderColor: '#1e496f' }" round
            style="vertical-align: bottom;">
            JavaScript
          </n-tag>
        </n-space>
      </n-card>
    </div>


    <br><br><br>



  </div>

  <n-space id="goto" class="goto animate__animated animate__backInLeft">

    <n-anchor :show-rail="false" :show-background="false" :bound="150">
      <p style="margin-bottom: 10px;">快速導航</p>

      <n-anchor-link title="．專案簡介" href="#info-point" />
      <n-anchor-link title="．主要開發技術" href="#technology-point" />
      <n-anchor-link title="．主要系統介紹" href="#mainSystem-point" />
      <n-anchor-link title="．參與開發者" href="#developers-point" />
      <n-anchor-link title="．專案原始碼" href="#github-point" />
      <!-- <n-anchor-link title="API" href="#API" /> -->
    </n-anchor>
  </n-space>
</template>

<script setup lang="ts">
import { BuildOutline, CodeSlash, PeopleSharp, LogoGithub, Sparkles } from "@vicons/ionicons5";
import AccountPage from "@/components/projectDescription/tutorlink/AccountPage.vue";
import LessonPage from "@/components/projectDescription/tutorlink/LessonPage.vue";
import ExercisePage from "@/components/projectDescription/tutorlink/ExercisePage.vue";
import ShopPage from "@/components/projectDescription/tutorlink/ShopPage.vue";
import OtherPage from "@/components/projectDescription/tutorlink/OtherPage.vue";



import DeveloperCard from "@/components/projectDescription/tutorlink/DeveloperCard.vue";


const carouselImg = [
  {
    img:
      "https://cdn.discordapp.com/attachments/1158784930596266055/1158786626202370159/TutorLink-Home.webp",
  },
  {
    img:
      "https://cdn.discordapp.com/attachments/1158784930596266055/1158793632896270407/TutorLink-Login.webp",
  },
  {
    img:
      "https://cdn.discordapp.com/attachments/1158784930596266055/1158793632522969149/TutorLink-MyExercise.webp",
  },
];

const useTechnology = [
  {
    name: "OpenJDK",
    icon: "http://cr.openjdk.java.net/~jeff/Duke/png/Thumbsup2.png",
    link: "https://openjdk.org/",
  },
  {
    name: "Spring Boot",
    icon: "https://spring.io/favicon.svg",
    link: "https://spring.io/projects/spring-boot",
  },
  {
    name: "Vue3",
    icon: "https://vuejs.org/images/logo.png",
    link: "https://vuejs.org/",
  },
  {
    name: "Vue Router",
    icon: "https://vuejs.org/images/logo.png",
    link: "https://router.vuejs.org/zh/",
  },
  {
    name: "Pinia",
    icon: "https://pinia.vuejs.org/logo.svg",
    link: "https://pinia.vuejs.org/",
  },
  {
    name: "Naive UI",
    icon: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
    link: "https://www.naiveui.com/zh-CN/os-theme",
  },

];

const accountDeveloper = [
  {
    name: "GongChi1126",
    img: "https://avatars.githubusercontent.com/u/135186489",
  }
];
const lessonDeveloper = [
  {
    name: "Rayliao0129",
    img: "https://avatars.githubusercontent.com/u/135186502",
  },
  {
    name: "suycci",
    img: "https://avatars.githubusercontent.com/u/135186349",
  }
];
const exerciseDeveloper = [
  {
    name: "uu890817",
    img: "https://avatars.githubusercontent.com/u/46030302",
  }
];
const shopDeveloper = [
  {
    name: "jenny3417",
    img: "https://avatars.githubusercontent.com/u/80151221",
  }
];
const othereDeveloper = [
  {
    name: "WeiC0907",
    img: "https://avatars.githubusercontent.com/u/120552238",
  }
];

const developers = [
  {
    name: "GongChi1126",
    img: "https://avatars.githubusercontent.com/u/135186489",
  },
  {
    name: "jenny3417",
    img: "https://avatars.githubusercontent.com/u/80151221",
  },
  {
    name: "Rayliao0129",
    img: "https://avatars.githubusercontent.com/u/135186502",
  },
  {
    name: "suycci",
    img: "https://avatars.githubusercontent.com/u/135186349",
  },
  {
    name: "uu890817",
    img: "https://avatars.githubusercontent.com/u/46030302",
  },
  {
    name: "WeiC0907",
    img: "https://avatars.githubusercontent.com/u/120552238",
  }
];


</script>

<style scoped>
* {
  font-weight: bold;
}



.n-tab-pane {
  font-family: arial, "Microsoft JhengHei", "微軟正黑體", sans-serif !important;
  color: #adbac7;
}


@media (max-width: 980px) {
  .tutorlinkWrap {
    width: 95%;
    height: 100%;
    margin: auto;
    background-color: #20252d;
    /* position: fixed; */
    /* z-index: 9999; */
    /* top: 0; */
    /* left: 0; */
    /* right: 0; */
    /* bottom: 0; */
    /* overflow: auto; */
  }

  .carousel-img {
    width: 100%;
    max-height: 450px;
    /* height: 500px; */
    object-fit: fill;
  }


  .github {}

  .github-left {
    margin-top: 10px;
    background-color: #282835;
  }

  .github-right {
    margin-top: 10px;
    background: #232e2c;
  }

  .github-name {
    font-size: 16px;
    color: #adbac7;
  }


  #goto {
    visibility: hidden;
  }
}



@media (min-width: 980px) {
  .tutorlinkWrap {
    width: 70%;
    height: 100%;
    margin: auto;
    background-color: #20252d;
    /* position: fixed; */
    /* z-index: 9999; */
    /* top: 0; */
    /* left: 0; */
    /* right: 0; */
    /* bottom: 0; */
    /* overflow: auto; */
  }

  .carousel-img {
    width: 100%;
    max-height: 450px;
    /* height: 500px; */
    object-fit: fill;
  }

  .github {
    display: flex;
    margin-top: 10px;
  }

  .github-left {
    flex: 1;
    left: 0;
    margin-right: 5px;
    width: 48%;
    background-color: #282835;
  }

  .github-right {
    flex: 1;
    right: 0;
    margin-left: 5px;
    width: 48%;
    background-color: #232e2c;
  }

  .github-name {
    font-size: 16px;
    color: #adbac7;
  }

}


@media (min-width: 1919px) {
  .tutorlinkWrap {
    width: 70%;
    height: 100%;
    margin: auto;
    background-color: #20252d;
    /* position: fixed; */
    /* z-index: 9999; */
    /* top: 0; */
    /* left: 0; */
    /* right: 0; */
    /* bottom: 0; */
    /* overflow: auto; */
  }

  .article-deviation:target {
    /* padding-top: 100px; */
    display: block;
    position: relative;
    color: #96916f;
    /* 也可以使用 position: absolute; */
    /* padding-top: 110px !important;
  position: relative;
  top: -110px; */
  }

  .github {
    display: flex;
    margin-top: 10px;
  }

  .github-left {
    flex: 1;
    left: 0;
    margin-right: 5px;
    width: 48%;
    background-color: #282835;
  }

  .github-right {
    flex: 1;
    right: 0;
    margin-left: 5px;
    width: 48%;
    background-color: #232e2c;
  }

  .github-name {
    font-size: 16px;
    color: #adbac7;
  }

  .point {
    display: block;
    height: 60px
  }
}

.n-carousel__dots {
  background-color: #fff;
}

.n-tabs,
.n-card {

  background: #20252d;
}


.goto {
  /* background-color: rgba(64, 119, 103, 0.205);
  padding: 10px; */
  position: fixed;
  top: 10%;
  left: 5%;
}

.point {
  display: block;
  height: 60px
}
</style>
