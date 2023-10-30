<template>
    <div class="descriptionWrap">
        <p class="projectName">
            <n-icon style="vertical-align: sub;">
                <TrailSignOutline />
            </n-icon> {{ props.data.name }}
        </p>

        <div class="description">
            <div class="left">
                <img :src="props.data.img" :alt="props.data.name">
            </div>
            <div class="right">
                <n-space vertical>
                    {{ props.data.description }}
                    <n-space class="moreInfoBtn" justify="end" align="end">

                        <router-link :to="`/project/${props.data.link}`" v-if="props.data.link !== ''">
                            <n-button strong secondary type="primary">
                                點我查看詳細介紹
                            </n-button></router-link>

                    </n-space>
                </n-space>

            </div>

        </div>


    </div>
</template>
    
<script setup lang='ts'>
import { TrailSignOutline } from "@vicons/ionicons5";

interface descriptionData {
    id: number,
    name: string,
    description: string,
    img: string,
    link: string
}

const props = defineProps<{
    data: descriptionData;
}>();







</script>
    
<style scoped>
@media (max-width: 1023px) {
    .description {
        display: flex;
        flex-direction: column;
    }

    .left {
        width: 100%;
        margin: auto;
        border-radius: 10px;
        margin-right: 10px;
    }

    .right {
        width: 100%;
        padding: 10px;

        margin: auto;
        border-radius: 10px;
        /* margin-left: 10px; */
    }

    img {
        display: block;
        width: 100%;
        height: 100px;
        object-fit: cover;
        margin-bottom: 10px;

    }
}

@media (min-width: 1023px) {
    .description {
        display: flex;
    }

    .left {
        width: 30%;
        /* height: 200px; */
        /* background-color: #262a32; */
        border-radius: 10px;
        margin-right: 10px;
    }

    .right {
        width: 70%;
        padding: 10px;

        position: relative;
        border-radius: 10px;
        margin-left: 10px;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .moreInfoBtn {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}

@media (min-width: 1919px) {
    .description {
        display: flex;
    }

    .left {
        width: 20%;
        /* height: 200px; */
        /* background-color: #262a32; */
        border-radius: 10px;
        margin-right: 10px;
    }

    .right {
        position: relative;
        width: 80%;
        padding: 10px;
        /* height: 200px; */
        /* background-color: #262a32; */
        border-radius: 10px;
        margin-left: 10px;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .moreInfoBtn {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}


.descriptionWrap {
    border: 2px solid rgb(95, 95, 95);
    padding: 15px;
    margin: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #262a32;
    /* box-shadow: 0 0 10px #16082c; */
    transition: all 0.2s;

}

.descriptionWrap:hover {
    background-color: #2c303a;
    transition: all 0.2s;
}

.description {
    background-color: #22262a;
}

.projectName {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
}

.right {
    line-height: 1.5;
}
</style>