import {createRouter, createWebHistory, type Router, type RouteRecordRaw} from "vue-router";
import authRoutes from "./auth-routes.ts";
import {useAuthStore} from "../stores/auth-store.ts";
import userRoutes from "./user-routes.ts";
import departmentRoutes from "./department-routes.ts";
import ticketRoutes from "./ticket-routes.ts";
import settingsRoutes from "./settings-routes.ts";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  ...authRoutes,
  ...userRoutes,
  ...departmentRoutes,
  ...ticketRoutes,
  ...settingsRoutes,
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !useAuthStore().isLoggedIn()) {
    next({name: "login"});
  } else {
    next();
  }
})

export default router;