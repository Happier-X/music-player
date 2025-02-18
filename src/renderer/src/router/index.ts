import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/songs'
    },
    {
        path: '/songs',
        component: () => import('../views/songs/index.vue')
    },
    {
        path: '/album',
        component: () => import('../views/album/index.vue')
    },
    {
        path: '/artist',
        component: () => import('../views/artist/index.vue')
    },
    {
        path: '/songList',
        component: () => import('../views/songList/index.vue')
    },
    {
        path: '/settings',
        component: () => import('../views/settings/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
