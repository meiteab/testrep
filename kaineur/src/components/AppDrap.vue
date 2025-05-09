<script>
import { mapState, mapActions } from "vuex";
  import TrelloPost from "./TrelloPost.vue";
  
  export default {
    name: "CategoryBoard",
    components: { TrelloPost },
    data() {
      return {
        updatedName: "",
        showUpdateForm: false,
      };
    },
    computed: {
      ...mapState(["categories", "posts"]),
      getPostsByCategory() {
        return (category) => {
          return this.posts.filter((post) => post.category === category);
        };
      },
    },
    methods: {
      ...mapActions([
        "fetchCategories",
        "fetchPosts",
        "updateCategory",
        "deleteCategory",
      ]),
      async submitUpdate(category) {
        const updatedCategory = {
          ...category,
          name: this.updatedName,
        };
        await this.updateCategory(updatedCategory);
        this.showUpdateForm = false;
      },
      async deleteCategory(categoryId) {
        await this.deleteCategory(categoryId);
      },
    },
    created() {
      this.fetchCategories();
      this.fetchPosts();
    },
  };
</script>
<template>
    <div class="category-board">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-column"
      >
        <h2>{{ category.name }}</h2>
        <div class="posts-container">
          <TrelloPost
            v-for="post in getPostsByCategory(category.name)"
            :key="post.id"
            :post="post"
          />
        </div>
        <button @click="deleteCategory(category.id)">Delete Category</button>
        <button @click="showUpdateForm = !showUpdateForm">Update Category</button>
  
        <div v-if="showUpdateForm">
          <form @submit.prevent="submitUpdate(category)">
            <input v-model="updatedName" placeholder="Update name" required />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
</template>
<style>
.category-board {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  .category-column {
    width: 23%;
    background-color: #f4f6f8;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .posts-container {
    margin-top: 10px;
  }
</style>