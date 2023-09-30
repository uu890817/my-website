import githubApi from "@/api/githubApi.ts";


const user = "uu890817";

export const getRepos = async () => {
  const result = await githubApi.get(`users/${user}/repos`);
  return result.data;
};

export const getUsedLanguage = async (repoName: string) => {
  const result = await githubApi.get(`repos/${repoName}/languages`);
  return result.data;
};

export const getContributors = async (repoName: string) => {
  const result = await githubApi.get(`repos/${repoName}/contributors`);
  return result.data;
};