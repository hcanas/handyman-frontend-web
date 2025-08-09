import type {RouteRecordRaw} from "vue-router";

const departmentRoutes: RouteRecordRaw[] = [
  {
    path: "/departments",
    name: "departments",
    component: () => import("../views/departments/Departments.vue"),
    meta: { requiresAuth: true },
  },
];

export default departmentRoutes;