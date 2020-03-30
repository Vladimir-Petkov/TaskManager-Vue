import Home from './components/Home.vue';
import Register from './components/core/user/Register.vue';
import Login from "./components/core/user/Login.vue";
import Create from './components/core/tasks/Create.vue';
import Edit from './components/core/tasks/Edit.vue';
import Delete from './components/core/tasks/Delete.vue';
import Profile from './components/core/user/Profile.vue';

export default [
    { path: '/', component: Home},
    { path: '/register', component: Register},
    { path: '/login', component: Login},
    { path: '/create', component: Create},
    { path: `/edit/:id`, component: Edit, props: true},
    { path: '/delete/:_id', component: Delete},
    { path: '/profile/:id', component: Profile},
]