import Vue from "vue";
import Router from "vue-router";
import Today from "./views/Today.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [ // all routes here:
        {
            path: "/",
            name: "today",
            component: Today
        }
    ]
});