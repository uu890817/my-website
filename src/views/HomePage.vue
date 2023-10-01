<template>
    <div class="homeWrap">
        <div class="left animate__animated animate__bounceInLeft">
            <ProfileComponent />
        </div>

        <div class="right animate__animated animate__bounceInRight">
            <div v-if="error403">
                <n-space justify="space-between" align="center">
                    <p style="font-size: 20px;">在Github上的專案(以下資料來自Github API):</p>

                    <n-space>
                        <n-select v-model:value="sortValue" :options="sortOptions" style="min-width: 200px;" />
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-button strong secondary circle @click="changeOrder">
                                    <template #icon>
                                        <div v-if="(sortOrder === 'asc')">
                                            <n-icon>
                                                <ChevronUpOutline />
                                            </n-icon>
                                        </div>
                                        <div v-else>
                                            <n-icon>
                                                <ChevronDownOutline />
                                            </n-icon>
                                        </div>

                                    </template>
                                </n-button>
                            </template>
                            <div v-if="(sortOrder === 'asc')"><span>目前: 早 ➔ 晚</span></div>
                            <div v-else><span>目前: 晚 ➔ 早</span></div>

                        </n-popover>

                    </n-space>
                </n-space>
                <div v-if="reflash">
                    <div v-for="repo in  sortedRepos " :key="repo.id">
                        <GithubCard :repoData="repo" />
                    </div>
                    <n-space justify="center">
                        <n-pagination v-model:page="nowPage" :page-count="pages" />
                    </n-space>
                </div>
            </div>
            <div v-else>
                本IP目前已被Github API限制流量，因此部分畫面無法顯示，請過一陣子再嘗試，造成不便請見諒。
                <br>
                或是先到以下頁面參觀看看，感謝您的理解。
            </div>
            <!-- <img
                src="https://github-readme-stats.vercel.app/api?username=uu890817&theme=react&show_icons=true&hide_border=false&count_private=true">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=uu890817&theme=react&hide_border=false"> -->

        </div>
    </div>
</template>
    
<script setup lang='ts'>
import ProfileComponent from "@/components/homePage/ProfileComponent.vue";
import { ChevronUpOutline, ChevronDownOutline } from "@vicons/ionicons5";
import GithubCard from "@/components/homePage/GithubCard.vue";
import { getRepos } from "@/api/requests.ts";
import { onMounted, ref, computed } from "vue";

const repos = ref([]);

const error403 = ref(true);
const reflash = ref(true);
const sortValue = ref("create");
const nowPage = ref(1);
const sortOrder = ref("desc");
const pages = computed(() => {
  return Math.round(repos.value.length / 4);
});
const sortedRepos = computed(() => {
  let sorted: { id: string }[] = [];
  let result: { id: string }[] = [];
  if (sortValue.value === "create") {
    sorted = sortCreated();
  }
  if (sortValue.value === "update") {
    sorted = sortUpdate();
  }

  for (let i = (4 * (nowPage.value - 1)); i < sorted.length; i++) {
    if (result.length < 4) {
      result.push(sorted[i]);
    }
  }

  return result;
});




const sortOptions = ref([
  {
    label: "按建立日期排序",
    value: "create",
  },
  {
    label: "按最後更新日期排序",
    value: "update",
  },
]);




const changeOrder = () => {
  if (sortOrder.value === "asc") {
    sortOrder.value = "desc";
  } else {
    sortOrder.value = "asc";
  }
};

const sortCreated = () => {
  return (repos.value).sort((a: { created_at: string }, b: { created_at: string }) => {
    let aData = new Date(a.created_at).getTime();
    let bData = new Date(b.created_at).getTime();
    if (sortOrder.value === "asc") {
      return aData - bData;
    }
    return bData - aData;
  });
};

const sortUpdate = () => {
  return (repos.value).sort((a: { updated_at: string }, b: { updated_at: string }) => {
    let aData = new Date(a.updated_at).getTime();
    let bData = new Date(b.updated_at).getTime();
    if (sortOrder.value === "asc") {
      return aData - bData;
    }
    return bData - aData;
  });
};

onMounted(async () => {
  console.log("onCreate");

  const getData = localStorage.getItem("allRepos");
  const getTime = localStorage.getItem("allReposEfficientTime");
  if (getData !== null && getTime !== null && (new Date().getTime() - parseInt(getTime)) < 1800000) {
    repos.value = JSON.parse(getData);
    return;
  }
  let result = await getRepos();
  localStorage.setItem("allRepos", JSON.stringify(result));
  localStorage.setItem("allReposEfficientTime", new Date().getTime().toString());
  // let result = await getRepos();
  if (result === "Request failed with status code 403") {
    error403.value = true;
    return;
  }

  localStorage.setItem("allRepos", JSON.stringify(result));
  localStorage.setItem("allReposEfficientTime", new Date().getTime().toString());

  repos.value = result.sort((a: { created_at: string }, b: { created_at: string }) => {
    let aData = new Date(a.created_at).getTime();
    let bData = new Date(b.created_at).getTime();
    return bData - aData;
  });
  // repos.value = result;
  console.log(repos);


});

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