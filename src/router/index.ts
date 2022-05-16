import type { App } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    // it follows the base URL you set in your vite.config
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import("@/pages/Home/Index.vue")
        },
        {
            path: '/transactions',
            component: () => import("@/pages/Transactions/Index.vue")
        },
        {
            path: '/blocks',
            component: () => import("@/pages/Blocks/Index.vue")
        }
    ]
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router