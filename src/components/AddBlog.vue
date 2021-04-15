<template>
  <div>
    <form>
      <label>Title</label>
      <input type="text" id="blog-title" v-model="blog.title" />
      <label>Blog Content</label>
      <textarea id="blog-content" v-model="blog.content"></textarea>
      <label>Author</label>
      <select v-model="blog.author">
        <option value="Cole">Cole</option>
        <option value="Kam">Kam</option>
      </select>
      <input type="submit" value="Post Blog" @click.prevent="addBlog" />
    </form>

    <div id="preview">
      <h2>Blog Title: {{ blog.title }}</h2>
      <p>Blog Content: {{ blog.content }}</p>
      <p>Blog Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      blog: {
        title: "",
        content: "",
        author: ""
      }
    };
  },
  methods: {
    addBlog() {
      this.$emit("addBlog", this.blog);
    }
  }
};
</script>
