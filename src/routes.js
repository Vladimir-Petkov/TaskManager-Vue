import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/core/user/Register.vue';
import Login from "./components/core/user/Login.vue";
import Create from './components/core/tasks/Create.vue';
import Edit from './components/core/tasks/Edit.vue';
import Delete from './components/core/tasks/Delete.vue';
import Profile from './components/core/user/Profile.vue';
import NotFound from './components/core/common/NotFound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/register', name: 'register', component: Register },
        { path: '/login', name: 'login', component: Login },
        { path: '/create', component: Create },
        { path: '/edit/:_id', name: 'Edit', component: Edit },
        { path: '/delete/:_id', name: 'Delete', component: Delete },
        { path: '/profile/:id', name: 'Profile', component: Profile },
        { path: '*', name: 'NotFound', component: NotFound },
    ]
});

const openRoutes = ['login', 'register'];

router.beforeEach((to, from, next) => {
    if (openRoutes.includes(to.name)) {
        next()
    } else if (sessionStorage.getItem("authtoken")) {
        next()
    } else {
        next('/login');
    }
});

export default router;