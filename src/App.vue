<template>
  <n-config-provider :theme="theme">
    <!-- <n-card> 当前操作系统的主题是 {{ osThemeRef }}。 </n-card> -->

    <NavBar />
    <RouterView />



  </n-config-provider>
</template>
  
<script setup lang='ts'>
import NavBar from "@/components/NavBar.vue";
import { useOsTheme, darkTheme } from "naive-ui";
import { computed } from "vue";

const osThemeRef = useOsTheme();
const theme = computed(() => {
  return osThemeRef.value === "dark" ? darkTheme : null;
});
</script>
  
<style></style>