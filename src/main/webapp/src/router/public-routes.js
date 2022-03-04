import userRoutes from "./user-routes.js";

const childrenRoutes = [
  {
    meta: { requiresAuth: false },
    path: ":catchAll(.*)*",
    component: () => import("pages/Index.vue"),
  },
  {
    meta: { requiresAuth: false },
    path: "/",
    component: () => import("pages/Index.vue"),
  },
  {
    meta: { requiresAuth: false },
    path: "stories",
    component: () => import("pages/Stories.vue"),
  },
  {
    meta: { requiresAuth: false },
    path: "story/:story_uid?",
    component: () => import("pages/Story.vue"),
  },
  {
    meta: { requiresAuth: false },
    path: "books",
    component: () => import("pages/Books.vue"),
  },
  {
    meta: { requiresAuth: true },
    path: "login",
    component: () => import("pages/Login.vue"),
  }
]

const routes = [
  {
    meta: { requiresAuth: false },
    name: "root",
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: childrenRoutes,
  },
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/Error404.vue"),
  // },
  {
    path: "/error",
    component: () => import("layouts/ErrorLayout.vue"),
  },  
];

if(userRoutes !== undefined && userRoutes !== null && Object.keys(userRoutes).length > 0){
  routes.push(userRoutes);
}

export default routes;
