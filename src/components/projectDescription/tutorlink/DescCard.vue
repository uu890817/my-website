<template>
    <div class="desc-wrap-style-1" v-if="props.cardStyle === 0">
        <div class="image" v-viewer style="float: left;">
            <img :src="props.data.img">
        </div>
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
        <div class="image" v-viewer>
            <img :src="props.data.img" style="float: right;">
        </div>
    </div>
</template>
    
<script setup lang='ts'>
interface dataStyle {
    img: string,
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

.image>img {
    display: block;
    width: 300px;
    cursor: pointer;
    transition: all 0.2s;
}

.image>img:hover {
    display: block;
    width: 350px;
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