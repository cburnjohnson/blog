<template>
  <div>
    <form>
      <label>Title</label>
      <input type="text" id="blog-title" v-model.lazy="blog.title" />
      <label>Blog Content</label>
      <textarea id="blog-content" v-model.lazy="blog.content"></textarea>
      <label>Author</label>
      <select v-model="blog.author">
        <option value="Cole">Cole</option>
        <option value="Kam">Kam</option>
      </select>
      <input type="submit" value="Post Blog" @click.prevent="createBlog" />
    </form>

    <div id="preview">
      <h2>Blog Title: {{ blog.title }}</h2>
      <p>Blog Content: {{ blog.content }}</p>
      <p>Blog Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: function() {
    return {
      blog: {
        id: 0,
        title: '',
        content: '',
        author: ''
      }
    };
  },
  methods: {
    ...mapActions(['addBlog']),
    createBlog: function() {
      let newBlog = Object.assign({}, this.blog);
      newBlog.id = Math.random();
      this.addBlog(newBlog);
    }
  }
};
</script>
