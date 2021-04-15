<template>
  <ul id="blogs">
    <li v-for="blog in blogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <span>{{ blog.author }}</span>
      <p>{{ blog.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["blogs"]
};
</script>
