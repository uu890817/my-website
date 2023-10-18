<template>
    <div class="desc-wrap-style-1" v-if="props.cardStyle === 0">

        <div class="image" v-viewer style="float: left;" v-if="props.data.img.length === 1">
            <img class="carousel-img" :src="props.data.img[0]" alt="圖片載入中...">
        </div>
        <n-carousel class="image" v-viewer autoplay draggable :space-between="100" :interval="5000" dot-type="line"
            dot-placement="left" v-else>
            <img class="carousel-img" v-for="(img, index) in props.data.img" :key="index" :src="img" alt="圖片載入中..." />
        </n-carousel>

        <div class="text">
            <div class="title">
                {{ props.data.title }}
            </div>
            <div class="content">
                {{ props.data.text }}
            </div>
        </div>
    </div>
    <div class="desc-wrap-style-2" v-else>
        <div class="text">
            <div class="title">
                {{ props.data.title }}
            </div>
            <div class="content">
                {{ props.data.text }}
            </div>
        </div>

        <div class="image" v-viewer v-if="props.data.img.length === 1">
            <img class="carousel-img" :src="props.data.img[0]" style="float: right;" alt="圖片載入中...">
        </div>
        <n-carousel class="image" v-viewer autoplay draggable :interval="5000" :space-between="100" dot-type="line"
            dot-placement="right" v-else>
            <img class="carousel-img" style="float: right;" v-for="(img, index) in props.data.img" :key="index" :src="img"
                alt="圖片載入中..." />
        </n-carousel>
    </div>
</template>
    
<script setup lang='ts'>
interface dataStyle {
    img: string[],
    title: string,
    text: string
}

const props = defineProps<{
    data: dataStyle,
    cardStyle: number,
}>();

</script>
    
<style scoped>
.desc-wrap-style-1 {
    width: 100%;
    background-color: #2d3643;
    display: flex;
}

.desc-wrap-style-2 {
    width: 100%;
    background-color: #343e4e;
    display: flex;
}

.image {
    flex: 30%;
    padding: 30px;
    transition: all 0.2s;
}

.carousel-img {
    display: block;
    width: 300px;
    height: 220px;
    cursor: pointer;
    transition: all 0.2s;
}

.carousel-img:hover {
    display: block;
    width: 320px;
    height: 240px;
    transition: all 0.2s;
}

.text {
    display: block;
    margin: auto;
    justify-content: center;
    flex: 70%;
    padding: 30px;
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
    color: #87a8dd;
}

.content {
    padding: 0;
    line-height: 1.5;
    padding-top: auto;
    white-space: pre-line;
}
</style>