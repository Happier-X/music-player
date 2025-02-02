import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/songs'
    },
    {
        path: '/songs',
        component: () => import('../views/songs/Index.vue')
    },
    {
        path: '/album',
        component: () => import('../views/album/Index.vue')
    },
    {
        path: '/artist',
        component: () => import('../views/artist/Index.vue')
    },
    {
        path: '/songList',
        component: () => import('../views/songList/Index.vue')
    },
    {
        path: '/settings',
        component: () => import('../views/settings/Index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
