<template>
  <div>
    <add-blog @addBlog="addBlog"></add-blog>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";

export default {
  name: "App",
  components: {
    AddBlog
  },
  data: function() {
    return {
      blogs: []
    };
  },
  methods: {
    addBlog(blog) {
      this.blogs = [...this.blogs, blog];
    }
  }
};
</script>

<style></style>
