import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/user/Register.vue';
import Login from "./components/user/Login.vue";
import Create from './components/tasks/Create.vue';
import Edit from './components/tasks/Edit.vue';
import Details from './components/tasks/Details.vue';
import Delete from './components/tasks/Delete.vue';
import Profile from './components/user/Profile.vue';
import NotFound from './components/common/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/register', name: 'Register', component: Register, beforeEnter: anonymousGuard },
        { path: '/login', name: 'Login', component: Login, beforeEnter: anonymousGuard },
        { path: '/create', name: 'Create', component: Create },
        { path: '/edit/:_id', name: 'Edit', component: Edit },
        { path: '/details/:_id', name: 'Details', component: Details },
        { path: '/delete/:_id', name: 'Delete', component: Delete },
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '*', component: NotFound },
    ]
});

const openRoutes = ['Login', 'Register', 'Home'];

router.beforeEach((to, from, next) => {
    if (openRoutes.includes(to.name)) {
        next()
    } else if (sessionStorage.getItem("authtoken")) {
        next()
    } else {
        next('/login');
    }
});

function anonymousGuard(to, from, next) {
    if (sessionStorage.getItem('authtoken') !== null) {
        next('/');
    } else {
        next();
    }
}

export default router;