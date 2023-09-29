<template>
    <div class="homeWrap">
        <div class="left animate__animated animate__bounceInLeft">
            <ProfileComponent />
        </div>
        <div class="right animate__animated animate__bounceInRight">

            <!-- <img
                src="https://github-readme-stats.vercel.app/api?username=uu890817&theme=react&show_icons=true&hide_border=false&count_private=true">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=uu890817&theme=react&hide_border=false"> -->

        </div>
    </div>
</template>
    
<script setup lang='ts'>
import ProfileComponent from "@/components/homePage/ProfileComponent.vue";
</script>
    
<style scoped>
.homeWrap {
    /* 左右布局 */
    position: relative;
    width: 100%;

}

.left {
    /* 左布局 */
    position: absolute;
    left: 0;
    width: 35%;
    padding: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #3b3b51;
    border-radius: 5px;
    background-color: #2b2b36;
}

.right {
    /* 右布局 */
    position: absolute;
    right: 0;
    width: 60%;
    padding: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #3b3b51;
    border-radius: 5px;
    background-color: #2b2b36;


}
</style>