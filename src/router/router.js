import { createRouter, createWebHistory } from 'vue-router';
import NombreForm from '../components/HelloWorld.vue';

import SlidingPuzzle from '../components/RompecabezasDeslizantes.vue';
import OtherPuzzle from '../components/SiguienteRompecabeza.vue'

const routes = [
  { path: '/', component: NombreForm },
  { path: '/puzzle', component: SlidingPuzzle },
  { path: '/puzzle2', component: OtherPuzzle}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
