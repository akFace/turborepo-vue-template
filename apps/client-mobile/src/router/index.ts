import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/game/:id',
      component: () => import('@/views/game/index.vue'),
    },
  ],
  history: createWebHistory(),
});

export default router;
