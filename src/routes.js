import Home from './components/Home.vue';
import Register from './components/core/user/Register.vue';
import Login from "./components/core/user/Login.vue";
import Create from './components/core/tasks/Create.vue';
import Edit from './components/core/tasks/Edit.vue';
import Delete from './components/core/tasks/Delete.vue';
import Profile from './components/core/user/Profile.vue';
import Logout from './components/core/user/Logout.vue';

export default [
    { path: '/', component: Home},
    { path: '/register', component: Register},
    { path: '/login', component: Login},
    { path: '/create', component: Create},
    { path: '/edit', component: Edit},
    { path: '/delete', component: Delete},
    { path: '/profile', component: Profile},
    { path: '/logout', component: Logout},
]