<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="tutorlinkWrap animate__animated animate__zoomIn">
    <n-carousel autoplay draggable :space-between="20" style="border: 1px solid #595959; border-radius: 3px;">
      <img class="carousel-img" v-for="(img, index) in carouselImg" :key="index" :src="img.img" :interval="3000"
        v-viewer />
    </n-carousel>



    <n-alert title="頁面製作中" type="warning" style="margin-top: 10px;">
      本頁面還在制作中，部分資訊可能不完全，造成不便請見諒。
    </n-alert>
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
      Yu's Website
      也就是本網頁，使用Vue3.js搭配TypeScript開發，並且使用yarn來管理套件，首頁使用AJAX技術來取得Github提供的資料，並且轉換成容易閱讀的樣式來呈現，本網站也挑選了一些專案來進行更詳細的介紹，可以點選導航列上面的精選專案來查看。
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
    <n-space id="mainSystem" class="article-deviation"
      style="margin-top:30px; margin-bottom: 20px; font-size: 24px; font-weight: bold;">
      <n-icon style="vertical-align: sub; ">
        <CodeSlash />
      </n-icon>主要功能介紹
    </n-space>
    <MainDesc />
    <!-- ---------------------------------------------------------------------------------------------------------------------- -->
    <div id="developers-point" class="point" />
    <n-space id="developers" class="article-deviation" style="margin-top:30px; font-size: 24px; font-weight: bold;">
      <n-icon style="vertical-align: sub; ">
        <PeopleSharp />
      </n-icon>開發者
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
            href="https://github.com/uu890817/my-website">my-website</a></span>
        <n-space justify="end">
          <n-tag :bordered="false" type="success" round style="vertical-align: bottom;">
            Vue
          </n-tag>
          <n-tag :bordered="false" type="info" round style="vertical-align: bottom;">
            TypeScript
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
      <n-anchor-link title="．主要功能介紹" href="#mainSystem-point" />
      <n-anchor-link title="．開發者" href="#developers-point" />
      <n-anchor-link title="．專案原始碼" href="#github-point" />
      <!-- <n-anchor-link title="API" href="#API" /> -->
    </n-anchor>
  </n-space>
</template>
  
<script setup lang="ts">
import { BuildOutline, CodeSlash, PeopleSharp, LogoGithub, Sparkles } from "@vicons/ionicons5";
import MainDesc from "@/components/projectDescription/yuwebsite/MainDescription.vue";



const carouselImg = [
  {
    img:
      "https://i.imgur.com/GBI65mm.webp",
  },
  {
    img:
      "https://i.imgur.com/h8Z0fqh.webp",
  },
  {
    img:
      "https://i.imgur.com/O5E8D51.webp",
  },
  {
    img:
      "https://i.imgur.com/bIEwDRD.webp",
  },
];

const useTechnology = [
  {
    name: "Yarn",
    icon: "https://yarnpkg.com/img/yarn-favicon.svg",
    link: "https://yarnpkg.com/",
  },
  {
    name: "Vite",
    icon: "https://vitejs.dev/logo.svg",
    link: "https://vitejs.dev/guide/",
  },
  {
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    link: "https://www.typescriptlang.org/",
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

const developers = [
  {
    name: "uu890817",
    img: "https://avatars.githubusercontent.com/u/46030302",
  },
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

    object-fit: cover;
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
  