<script >
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Post from "./components/TrelloPost.vue";

export default {
  name: "App",
  components: {
    Post,
  },
  methods: {
    filteredPosts(category) {
      return this.$store.state.posts.filter(
        (post) => post.category === category
      );
    },
    addPost(category) {
      const title = prompt("Enter the title of the post:");
      this.$store.dispatch("addPost", {
        id: Date.now(),
        title,
        category,
        comments: [],
      });
    },
  },
};
</script>

<template>
   <div id="app">
    <div
      v-for="category in this.$store.state.categories"
      :key="category"
      class="category"
    >
      <h2>{{ category }}</h2>
      <button @click="addPost(category)">Add Post</button>
      <post
        v-for="post in filteredPosts(category)"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
  <RouterView />
</template>

<style scoped>


</style>
