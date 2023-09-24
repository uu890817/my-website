<template >
    <div>
        <router-view></router-view>
    </div>
    <n-space class="errBtn" justify="center">
        <n-button @click="back">回上一頁吧</n-button>
        <n-button @click="home">回首頁吧</n-button>
    </n-space>
</template>
<script setup lang='ts'>
import { useRouter } from "vue-router";
const router = useRouter();

const back = () => {
  router.go(-1);
};
const home = () => {
  router.push({ name: "Home" });
};

</script>
<style scoped>
div {
    margin: auto;
}

.errBtn {
    max-width: 500px;
}
</style>