import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomePage.vue"),
    },

    // -------------------錯誤處理---------------------------------
    {
      path: "/error",
      name: "error",
      redirect: { name: "404" },
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



export default router;
