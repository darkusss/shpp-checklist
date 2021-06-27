import { createRouter, createWebHistory }from 'vue-router';
import About from '@/pages/About';
import Home from '@/pages/Home';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
