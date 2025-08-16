import type {RouteRecordRaw} from "vue-router";

const ticketRoutes: RouteRecordRaw[] = [
  {
    path: "/tickets",
    name: "tickets",
    component: () => import("../views/tickets/Tickets.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets/new",
    name: "new-ticket",
    component: () => import("../views/tickets/NewTicket.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/ticket/:id/overview",
    name: "ticket-overview",
    component: () => import("../views/tickets/overview/TicketOverview.vue"),
    meta: { requiresAuth: true },
  },
];

export default ticketRoutes;