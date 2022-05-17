export const routes = [
    {
        path: '/',
        component: () => import("@/pages/mobile/Home/Index.vue")
    },
    {
        path: '/transactions',
        component: () => import("@/pages/mobile/Transaction/List/Index.vue")
    },
    {
        path: '/blocks',
        component: () => import("@/pages/mobile/Block/List/Index.vue")
    },
    {
        path: '/transaction/:hash',
        component: () => import("@/pages/mobile/Transaction/Detail/Index.vue"),
        props: true
    },
    {
        path: '/block/:height',
        component: () => import("@/pages/mobile/Block/Detail/Index.vue"),
        props: true
    },
    {
        path: '/address/:address',
        component: () => import("@/pages/mobile/Address/Index.vue"),
        props: true
    }
]