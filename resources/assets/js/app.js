
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
import App from './components/App.vue'
import PaperList from './components/paper/List.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/',
            component: PaperList
        },
        {
            path: '/登录',
            name: 'login',
            component: require('./components/user/Login.vue')
        },
        {
            path: '/:name',
            component: PaperList
        },
        {
            path: '/文章/:name',
            component: require('./components/paper/Read.vue'),
            name: 'paper'
        },
        {
            path: '/后台/创建文章',
            component: require('./components/paper/Create.vue'),
            name: 'paper_create'
        },
        {
            path: '/后台/编辑文章/:name',
            component: require('./components/paper/Edit.vue'),
            name: 'paper_edit'
        }
    ]
})

const app = new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
