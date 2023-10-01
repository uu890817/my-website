<template>
    <div class="githubRepoWrap">
        <n-space justify="space-between" align="center">
            <p class="repoNameWrap">
                <n-icon size="30" style="vertical-align: middle;">
                    <GitNetworkSharp />
                </n-icon>

                <span class="userName" @click="toWhosePage = fullName.userName; toGithubUserPage = true">{{
                    fullName.userName }}</span> /
                <span class="repoName"
                    @click="toWhosePage = fullName.userName; toWhichRepo = fullName.repoName; toGithubRepoPage = true">{{
                        fullName.repoName }}</span>
            </p>

            <p>最後更新 : {{ lastUpdateDate }}(UTC+8)</p>
            <!-- {{ props.repoData?.created_at }}
            {{ props.repoData?.updated_at }} -->
        </n-space>
        <hr>
        <div v-if="props.repoData?.description !== null">
            專案簡介:
            <div class=" description">{{ props.repoData?.description }}</div>
        </div>
        <div v-else>
            專案簡介:
            <div class=" description">本專案目前沒有簡介༼ つ ◕_◕ ༽つ</div>
        </div>
        <hr>
        <n-space justify="space-between" align="end">
            <n-space>
                <n-avatar-group :options="contributorsOptions" :size="40" :max="10">
                    <template #avatar="{ option: { name, src } }">
                        <n-tooltip>
                            <template #trigger>
                                <n-avatar :src="src" @click="toWhosePage = name; toGithubUserPage = true" />
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
                <div v-for="(value, key) in usedLanguages" :key="value">

                    <n-tag v-if="key === 'Java'" :bordered="false"
                        :color="{ color: '#493541', textColor: '#d48cb9', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'Vue'" :bordered="false" type="success" round style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'TypeScript'" :bordered="false" type="info" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'JavaScript'" :bordered="false"
                        :color="{ color: '#5b4a32', textColor: '#d4c78c', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'HTML'" :bordered="false"
                        :color="{ color: '#5b3232', textColor: '#ec5d5d', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'CSS'" :bordered="false"
                        :color="{ color: '#313755', textColor: '#607dff', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'Python'" :bordered="false"
                        :color="{ color: '#3973a4', textColor: '#d4c78c', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'PHP'" :bordered="false"
                        :color="{ color: '#7377ad', textColor: '#272739', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else-if="key === 'C#'" :bordered="false"
                        :color="{ color: '#6d287e', textColor: '#d04cf0', borderColor: '#1e496f' }" round
                        style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                    <n-tag v-else :bordered="false" round style="vertical-align: bottom;">
                        {{ key }}
                    </n-tag>
                </div>
            </n-space>

        </n-space>


    </div>
    <!-- {{ props.repoData }} -->


    <n-modal v-model:show="toGithubUserPage">
        <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">

            <span style="font-size: 20px; ">
                <n-icon size="23" style="vertical-align: sub;">
                    <LogOutOutline />
                </n-icon>
                {{ `即將前往 ${toWhosePage} 的Github頁面` }}
            </span>
            <template #footer>
                <n-space justify="end">
                    <n-button type="error" @click="toUserPage('cancle')">
                        取消前往
                    </n-button>
                    <n-button type="warning" @click="toUserPage('newPage')">
                        開新分頁
                    </n-button>
                    <n-button type="success" @click="toUserPage('go')">
                        確認前往
                    </n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>

    <n-modal v-model:show="toGithubRepoPage">
        <n-card style="width: 600px" :bordered="false" size="huge" role="dialog" aria-modal="true">

            <span style="font-size: 20px; ">
                <n-icon size="23" style="vertical-align: sub;">
                    <LogOutOutline />
                </n-icon>
                {{ `即將前往 ${toWhosePage} / ${toWhichRepo} 的Github頁面` }}
            </span>
            <template #footer>
                <n-space justify="end">
                    <n-button type="error" @click="toRepoPage('cancle')">
                        取消前往
                    </n-button>
                    <n-button type="warning" @click="toRepoPage('newPage')">
                        開新分頁
                    </n-button>
                    <n-button type="success" @click="toRepoPage('go')">
                        確認前往
                    </n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
</template>
    
<script setup lang='ts'>
import { GitNetworkSharp, LogOutOutline } from "@vicons/ionicons5";
import { getUsedLanguage, getContributors } from "@/api/requests.ts";
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  repoData: Object,
});

// ref--------------------------------------------------------
const toGithubUserPage = ref(false);
const toGithubRepoPage = ref(false);
const toWhosePage = ref("");
const toWhichRepo = ref("");
const usedLanguages = ref({});
const contributors = ref([]);

// computed--------------------------------------------------------
const lastUpdateDate = computed(() => {
  const dateTime = new Date(new Date(props.repoData?.updated_at).getTime() - (8 * 60 * 60 * 1000));

  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
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
const fullName = computed(() => {
  const name = props.repoData?.full_name;
  if (name === undefined) {
    return {
      userName: undefined,
      repoName: undefined,
    };
  } else {
    const splitName = name.split("/");
    const result = {
      userName: splitName[0],
      repoName: splitName[1],
    };
    return result;
  }


});

// function--------------------------------------------------------
const createDropdownOptions = (options: Array<{ name: string; src: string }>) =>
  options.map((option) => ({
    key: option.name,
    label: option.name
  }));
const toUserPage = (type: string) => {
  if (type === "cancle") {
    toGithubUserPage.value = false;
    return;
  }
  if (type === "newPage") {
    window.open(`https://github.com/${toWhosePage.value}`);
    toGithubUserPage.value = false;
  }
  if (type === "go") {
    window.location.href = `https://github.com/${toWhosePage.value}`;
    toGithubUserPage.value = false;
  }
};
const toRepoPage = (type: string) => {
  if (type === "cancle") {
    toGithubRepoPage.value = false;
    return;
  }
  if (type === "newPage") {
    window.open(`https://github.com/${toWhosePage.value}/${toWhichRepo.value}`);
    toGithubRepoPage.value = false;
  }
  if (type === "go") {
    window.location.href = `https://github.com/${toWhosePage.value}/${toWhichRepo.value}`;
    toGithubRepoPage.value = false;

  }
};

// lifecycle--------------------------------------------------------
onMounted(async () => {
  const getUsedLanguagesData = localStorage.getItem(`${props.repoData?.full_name}:usedLanguages`);
  const getUsedLanguagesTime = localStorage.getItem(`${props.repoData?.full_name}:usedLanguagesEfficientTime`);
  const getContributorsData = localStorage.getItem(`${props.repoData?.full_name}:contributors`);
  const getContributorsTime = localStorage.getItem(`${props.repoData?.full_name}:contributorsEfficientTime`);
  if (getUsedLanguagesData !== null && getUsedLanguagesTime !== null && (new Date().getTime() - parseInt(getUsedLanguagesTime)) < 1800000) {
    usedLanguages.value = JSON.parse(getUsedLanguagesData);
  } else {
    const usedLanguagesResult = await getUsedLanguage(props.repoData?.full_name);
    localStorage.setItem(`${props.repoData?.full_name}:usedLanguages`, JSON.stringify(usedLanguagesResult));
    localStorage.setItem(`${props.repoData?.full_name}:usedLanguagesEfficientTime`, new Date().getTime().toString());
    usedLanguages.value = usedLanguagesResult;
  }

  if (getContributorsData !== null && getContributorsTime !== null && (new Date().getTime() - parseInt(getContributorsTime)) < 1800000) {
    contributors.value = JSON.parse(getContributorsData);
  } else {
    const contributorsResult = await getContributors(props.repoData?.full_name);
    localStorage.setItem(`${props.repoData?.full_name}:contributors`, JSON.stringify(contributorsResult));
    localStorage.setItem(`${props.repoData?.full_name}:contributorsEfficientTime`, new Date().getTime().toString());
    contributors.value = contributorsResult;
  }

});
</script>
    
<style>
.userName,
.repoName {
    text-decoration: none;
    transition: all 0.2s;
}

.userName:hover,
.repoName:hover {
    color: rgb(121, 121, 166);
    transition: all 0.2s;
    cursor: pointer;

}


.n-avatar {
    cursor: pointer;
}

.repoNameWrap {
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
    transition: all 0.2s;

}

.githubRepoWrap:hover {
    background-color: #2c303a;
    transition: all 0.2s;
}

.description {
    font-size: 16px;
    line-height: 1.5;


    margin-top: 5px;
    padding: 20px;
    background: #22262a;
    /* border: 1px solid rgb(180, 180, 180); */
}
</style>