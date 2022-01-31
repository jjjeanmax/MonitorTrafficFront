import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "monitor",
    component: () => import("@/components/StartMonitor.vue"),
  },
  {
    path: "/monitors",
    name: "monitor-details",
    component: () => import("@/components/MonitorTraffic.vue"),
  },
  {
    path: "/add",
    name: "add-ip",
    component: () => import("@/components/AddMonitor.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
