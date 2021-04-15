<template>
  <div>
    <add-blog @addBlog="addBlog"></add-blog>
    <list-blogs :blogs="blogs"></list-blogs>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ListBlogs from "./components/ListBlogs";

export default {
  name: "App",
  components: {
    AddBlog,
    ListBlogs
  },
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    addBlog(blog) {
      this.blogs.push(blog);
    }
  }
};
</script>

<style></style>
