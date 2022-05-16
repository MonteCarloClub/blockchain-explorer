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
            component: () => import("@/pages/Transaction/List/Index.vue")
        },
        {
            path: '/blocks',
            component: () => import("@/pages/Block/List/Index.vue")
        },
        {
            path: '/transaction/:hash',
            component: () => import("@/pages/Transaction/Detail/Index.vue"),
            props: true
        },
        {
            path: '/block/:height',
            component: () => import("@/pages/Block/Detail/Index.vue"),
            props: true
        },
        {
            path: '/address/:address',
            component: () => import("@/pages/Address/Index.vue"),
            props: true
        }
    ]
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router