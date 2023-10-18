<!-- eslint-disable no-irregular-whitespace -->
<template>
    <div class="developer-wrap">
        <span class="title">主要開發者:</span>
        <div class="content" style="width:130px; padding:10px 10px 0 10px; border-width: 0;"
            v-for="(data, index) in props.datas" :key="index">
            <n-space vertical justify="center" style="padding-top: 10px;">
                <img class="image" :src="data.img" style="width: 100px; height: 100px;">

                <a class="link" href="" target="_blank">{{ data.name }}</a>
            </n-space>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
interface dataStyle {
    name: string,
    img: string,

}

const props = defineProps<{
    datas: dataStyle[],
}>();

</script>
    
<style scoped>
.developer-wrap {
    width: 100%;
    /* background-color: #595b5e; */
    display: flex;

    padding: 30px;
    font-size: 20px;
}

.title {
    margin: auto 0;
}

.content {
    /* flex: 10%; */
    float: left;
}

.image {
    display: block;
    margin: auto;
    border-radius: 100%;
}

.link {
    display: block;
    margin: auto;
    text-align: center;
}
</style>