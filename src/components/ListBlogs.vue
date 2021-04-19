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
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['blogs'])
  }
};
</script>
