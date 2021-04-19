<template>
  <div>
    <nav>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/add-blog">Add Blog</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style></style>
