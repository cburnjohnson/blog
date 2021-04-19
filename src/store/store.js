import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload);
    }
  },
  actions: {
    addBlog(context, newBlog) {
      context.commit('addBlog', newBlog);
    }
  }
});
