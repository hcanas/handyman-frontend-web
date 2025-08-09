import type {RouteRecordRaw} from "vue-router";

const settingsRoutes: RouteRecordRaw[] = [
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/settings/Settings.vue"),
    meta: { requiresAuth: true },
  },
];

export default settingsRoutes;