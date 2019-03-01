// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import md5 from 'md5'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Vant from 'vant'
import Axios from 'axios'
import './utils/vconsole' // 手机端调试工具
import 'vant/lib/index.css'
import uweb from "vue-uweb" // 友盟
import router from './router'
import store from './store/store'
import { callApp } from './utils/jsBrige' // js与app之间的交互

Vue.use(Vuex);
Vue.use(Vant)
    // Vue.use(uweb, { siteId: "1274330811" })

Vue.prototype.axios = Axios;
Vue.prototype.$md5 = md5;
Vue.prototype.$callApp = callApp;
Vue.config.productionTip = false
Axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=UTF-8"; //配置请求头信息。

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

// 登录拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // 判断该路由是否需要登录权限
        if (AUTH_TOKEN) {
            next();
        } else {
            next({
                path: "/login",
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    } else {
        next();
    }
});