import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  // console.log(to, from);
});

export default router;
