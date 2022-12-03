import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/index.vue';
const routes=[
    {
    name: 'Home',
    path: '/',
    component: Home
    },
    {
    name: 'Solutions',
    path: 'solutions',
    component:'../pages/solutions.vue' 
    },
    {
    name: 'Services',
    path: 'services',
    component:'../pages/services.vue' 
        },
    {
    name: 'Portfolio',
    path: 'portfolio',
    component:'../pages/portfolio.vue' 
    },
    {
    name: 'Blog',
    path: 'blog',
    component:'../pages/blog.vue' 
    },
    {
    name: 'Contact',
    path: 'contact',
    component:'../pages/contact.vue' 
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;