import type {RouteRecordRaw} from "vue-router";

const userRoutes: RouteRecordRaw[] = [
  {
    path: "/users",
    name: "users",
    component: () => import('../views/users/Users.vue'),
    meta: { requiresAuth: true },
  },
];

export default userRoutes;