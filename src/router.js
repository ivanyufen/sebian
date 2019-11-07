import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Content from "./containers/Content";
import Login from "./containers/Login"
import Register from "./containers/Register"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: "/login",
            component: Content,
            children: [

            ]
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        }
    ]
});

// router.beforeEach((to, from, next) => {
// })


export default router;
