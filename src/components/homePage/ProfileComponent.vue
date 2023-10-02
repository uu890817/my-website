<template>
    <img class="myPic" src="https://avatars.githubusercontent.com/u/46030302?v=4" alt="圖片">
    <br>
    <br>
    <p style="font-size: 30px;">裕</p>
    <br>

    <p style="font-size: 24px; color: #747d86; ">
        <n-icon size="30" style="vertical-align: middle;">
            <LogoGithub />
        </n-icon> @uu890817
    </p>
    <br>
    <hr>
    <br>
    <img class="mostUsedLanguage"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=uu890817&theme=react&show_icons=true&hide_border=false&layout=compact">
</template>
    
<script setup lang='ts'>
import { NIcon } from "naive-ui";
import { LogoGithub } from "@vicons/ionicons5";

</script>
    
<style scoped>
@media (max-width: 1023px) {
    .myPic {
        width: 200px;
        border-radius: 100%;
    }
}

@media (min-width: 1023px) {
    .myPic {
        width: 200px;
        border-radius: 100%;
    }
}

@media (min-width: 1919px) {

    .myPic {
        width: 300px;
        border-radius: 100%;
    }
}

.n-card {
    max-width: 300px;
}

.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}


.mostUsedLanguage {
    width: 100%;
}
</style>