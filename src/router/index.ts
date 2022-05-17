import type { App } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import { routes as pcRoutes } from "./pc";
import { routes as mobileRoutes } from "./mobile";

const router = createRouter({
    // it follows the base URL you set in your vite.config
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: []
})

export function initRoutes(isPC = true) {
    if (isPC) {
        pcRoutes.forEach(router.addRoute)
    }
    else {
        mobileRoutes.forEach(router.addRoute)
    }
    // https://router.vuejs.org/guide/advanced/dynamic-routing.html#adding-routes
    // 手动调用 router.replace() 来改变当前的位置，并覆盖我们原来的位置
    router.replace(router.currentRoute.value.fullPath)
}

export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router