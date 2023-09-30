<template>
    <div class="githubRepoWrap">
        <n-space justify="space-between" align="center">
            <p class="repoName">
                <n-icon size="30" style="vertical-align: middle;">
                    <GitNetworkSharp />
                </n-icon>
                {{ props.repoData?.full_name }}
            </p>

            <p>最後更新 : {{ lastUpdateDate }}</p>
            <!-- {{ props.repoData?.created_at }}
            {{ props.repoData?.updated_at }} -->
        </n-space>
        <hr>
        <n-space justify="space-between" align="end">
            <n-space>
                <n-avatar-group :options="contributorsOptions" :size="40" :max="10">
                    <template #avatar="{ option: { name, src, url } }">
                        <n-tooltip>
                            <template #trigger>
                                <a :href="url">
                                    <n-avatar :src="src" /></a>
                            </template>
                            {{ name }}
                        </n-tooltip>
                    </template>
                    <template #rest="{ options: restOptions, rest }">
                        <n-dropdown :options="createDropdownOptions(restOptions)" placement="top">
                            <n-avatar>+{{ rest }}</n-avatar>
                        </n-dropdown>
                    </template>
                </n-avatar-group>
            </n-space>
            <n-space justify="end">
                <n-tag :bordered="false" type="warning" round v-for="(value, key) in usedLanguages" :key="value"
                    style="vertical-align: bottom;">
                    {{ key }}
                </n-tag>
            </n-space>

        </n-space>


    </div>
    <!-- {{ props.repoData }} -->
</template>
    
<script setup lang='ts'>
import { GitNetworkSharp } from "@vicons/ionicons5";
import { getUsedLanguage, getContributors } from "@/api/requests.ts";
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  repoData: Object,
});

const usedLanguages = ref({});
const contributors = ref([]);
const lastUpdateDate = computed(() => {
  const dateTime = new Date(props.repoData?.updated_at);

  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const day = dateTime.getDate().toString().padStart(2, "0");
  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
});
const contributorsOptions = computed(() => {
  let data: object[] = [];
  contributors.value.forEach((contributor: { login: string, avatar_url: string, html_url: string }) => {
    let temp = {
      name: contributor.login,
      src: contributor.avatar_url,
      url: contributor.html_url
    };
    data.push(temp);
  });
  return data;
});


const createDropdownOptions = (options: Array<{ name: string; src: string }>) =>
  options.map((option) => ({
    key: option.name,
    label: option.name
  }));

onMounted(async () => {
  usedLanguages.value = await getUsedLanguage(props.repoData?.full_name);
  contributors.value = await getContributors(props.repoData?.full_name);
});
</script>
    
<style>
.repoName {
    font-size: 20px;
    font-weight: bold;
}

.githubRepoWrap {
    border: 2px solid rgb(95, 95, 95);
    padding: 15px;
    margin: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #262a32;
    /* box-shadow: 0 0 10px #16082c; */
}
</style>