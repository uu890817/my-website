import { createRouter, createWebHistory } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string
    icon?: string
  }
}

const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomePage.vue"),
      meta:{
        title:"Yu的個人網站",
      },
    },
    {
      path: "/project",
      name: "project",
      meta:{
        title:"精選專案",
      },
      component: () => import("@/views/ProjectDescription.vue"),
    },
    {
      path: "/project/tutorlink",
      name: "tutorlink",
      meta:{
        title:"Tutorlink介紹",
      },
      component: () => import("@/views/projectDescription/TutorLink.vue")
    },

    // -------------------錯誤處理---------------------------------
    {
      path: "/error",
      name: "error",
      redirect: { name: "404" },
      meta:{
        title:"出錯拉",
      },
      component: () => import("@/components/error/Page-404.vue"),
      children: [
        {
          path: "403",
          name: "403",
          component: () => import("@/components/error/Page-403.vue"),
        },
        {
          path: "404",
          name: "404",
          component: () => import("@/components/error/Page-404.vue"),
        },
        {
          path: "500",
          name: "500",
          component: () => import("@/views/ErrorView.vue"),
        },
      ],
    },

    // -------------------攔截---------------------------------
    {
      path: "/:notFound(.*)",
      redirect: { name: "error" },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    console.log(to.meta.title);
    document.title = to.meta.title;
  }
  next();
});

export default router;
