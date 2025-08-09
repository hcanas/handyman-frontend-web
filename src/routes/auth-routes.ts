import type {RouteRecordRaw} from "vue-router";

const authRoutes: RouteRecordRaw[] = [
  {
    path: "/register",
    name: 'register',
    component: () => import('../views/auth/Register.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("../views/auth/ResetPassword.vue"),
  },
];

export default authRoutes;