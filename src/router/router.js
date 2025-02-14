import { createRouter, createWebHistory } from 'vue-router';
import NombreForm from '../components/HelloWorld.vue';

import SlidingPuzzle from '../components/RompecabezasDeslizantes.vue';

const routes = [
  { path: '/', component: NombreForm },
  { path: '/puzzle', component: SlidingPuzzle },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
