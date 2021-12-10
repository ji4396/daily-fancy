import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/user',
			component: () => import('../views/Users.vue')
		},
		{
			path: '/vue2',
			component: () => import('../views/vue2.vue')
		},
	]
})

router.beforeEach((to, from, next) => {
	next();
})

export default router;