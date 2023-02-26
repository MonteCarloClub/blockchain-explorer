export const routes = [
    {
        path: '/',
        component: () => import("@/pages/pc/Home/Index.vue")
    },
    {
        path: '/transactions',
        component: () => import("@/pages/pc/Transaction/List/Index.vue")
    },
    {
        path: '/blocks',
        component: () => import("@/pages/pc/Block/List/Index.vue")
    },
    {
        path: '/transaction/:hash',
        component: () => import("@/pages/pc/Transaction/Detail/Index.vue"),
        props: true
    },
    {
        path: '/block/:height',
        component: () => import("@/pages/pc/Block/Detail/Index.vue"),
        props: true
    },
    {
        path: '/address/:address',
        component: () => import("@/pages/pc/Address/Index.vue"),
        props: true
    },
    {
        path: '/user',
        component: () => import("@/pages/pc/User/Index.vue"),
        props: true
    },
    {
        path: '/login',
        component: () => import("@/pages/pc/Login/Index.vue"),
        props: true
    }
]