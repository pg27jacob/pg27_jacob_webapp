import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './views/LandingPage.vue';
import AboutPage from './views/AboutPage.vue';
import UserPage from './views/UserPage.vue';
import ContactScreen from './views/ContactScreen.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/user/:id',
        name: 'UserInfo',
        component: UserPage
    },
    {
        path: '/contact',
        name: 'ContactScreen',
        component: ContactScreen
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;