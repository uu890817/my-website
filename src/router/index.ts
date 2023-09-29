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

// router.beforeEach((to) => {
// 	if (to.meta.needLogin) {
// 		console.info("來自路由守衛: 本頁面需登入");
// 		//登入辨別位置
// 		const API_URL = "/routerVerify";
// 		const routerVerify = async () => {
// 			const resData = await tutorlink.post(API_URL);
// 			if (
// 				resData.data === "loginAgain" ||
//         resData.data === "伺服器已重啟，請重新登入"
// 			) {
// 				router.replace({ name: "Home" });
// 			} else if (resData.data === "relogin") {
// 				router.replace({ name: "Home" });
// 			}
// 			console.log(resData.data);
// 		};
// 		routerVerify();
// 		return;
// 	}
// 	console.info("來自路由守衛: 本頁面不需登入");
// });

export default router;
