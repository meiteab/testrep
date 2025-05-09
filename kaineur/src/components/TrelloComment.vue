<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showUpdateForm: false,
      updatedContent: this.comment.content,
    };
  },
  methods: {
    ...mapActions(["updateComment", "deleteComment"]),
    async submitUpdate() {
      const updatedComment = {
        ...this.comment,
        content: this.updatedContent,
      };
      // Call the updateComment action with the updated comment
      await this.updateComment(updatedComment);
    },
  },
};
</script>
<template>
   <div class="comment">
    <p>{{ comment.content }}</p>
    <button @click="deleteComment">Delete Comment</button>
    <button @click="showUpdateForm = !showUpdateForm">Update Comment</button>

    <div v-if="showUpdateForm">
      <form @submit.prevent="submitUpdate">
        <textarea
          v-model="updatedContent"
          placeholder="Update content"
          required
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  </div> 
</template>
<style>
.comment {
  background-color: #f9f9f9;
  padding: 5px;
  border: 1px solid #eee;
  margin-top: 5px;
}
</style>