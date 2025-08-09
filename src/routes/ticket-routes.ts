import type {RouteRecordRaw} from "vue-router";

const ticketRoutes: RouteRecordRaw[] = [
  {
    path: "/tickets",
    name: "tickets",
    component: () => import("../views/tickets/Tickets.vue"),
    meta: { requiresAuth: true },
  },
];

export default ticketRoutes;