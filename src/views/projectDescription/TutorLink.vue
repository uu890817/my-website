<template>
    <div class="tutorlinkWrap animate__animated animate__zoomIn">
        <n-carousel autoplay draggable>
            <img class="carousel-img" v-for="(img, index) in carouselImg" :key="index" :src="img.img" :interval="3000">
            <!-- <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"> -->
        </n-carousel>








    </div>
</template>
    
<script setup lang='ts'>



const carouselImg = [
  { img: "https://cdn.discordapp.com/attachments/1158784930596266055/1158786626202370159/TutorLink-Home.webp" },
  { img: "https://cdn.discordapp.com/attachments/1158784930596266055/1158793632896270407/TutorLink-Login.webp" },
  { img: "https://cdn.discordapp.com/attachments/1158784930596266055/1158793632522969149/TutorLink-MyExercise.webp" }
];
</script>
    
<style scoped>
.tutorlinkWrap {
    width: 70%;
    height: 100%;
    margin: auto;
    background-color: #f0f0f0;
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

.n-carousel__dots {
    background-color: #fff;
}
</style>