import Vue from 'vue';
import App from './App.vue';
import AddBlog from './components/AddBlog';
import ListBlogs from './components/ListBlogs';
import VueRouter from 'vue-router';
import Store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ListBlogs },
  { path: '/add-blog', component: AddBlog }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  store: Store,
  render: h => h(App)
}).$mount('#app');
