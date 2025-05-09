<script>
import { mapState, mapActions } from "vuex";
import TrelloComment from "./TrelloComment.vue";

export default {
  name: "TrelloPost",
  components: { TrelloComment },
  props: {
    post: Object,
  },
  data() {
    return {
      newComment: "",
      showUpdateForm: false,
      updatedTitle: this.post.title,
      updatedContent: this.post.content,
    };
  },
  computed: {
    ...mapState(["comments"]),
    postComments() {
      return this.comments.filter((comment) => comment.postId === this.post.id);
    },
  },
  methods: {
    ...mapActions(["addComment", "updatePost", "deletePost"]),
    async submitComment() {
      const comment = {
        postId: this.post.id,
        content: this.newComment,
      };
      await this.addComment(comment);
      this.newComment = "";
    },
    async submitUpdate() {
      const updatedPost = {
        ...this.post,
        title: this.updatedTitle,
        content: this.updatedContent,
      };
      await this.updatePost(updatedPost);
      this.showUpdateForm = false;
    },
    async deletePost() {
      await this.deletePost(this.post.id);
    },
  },
};
</script>
<template>
 <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>

    <div class="comments">
      <TrelloComment
        v-for="comment in postComments"
        :key="comment.id"
        :comment="comment"
      />
    </div>

    <form @submit.prevent="submitComment">
      <input v-model="newComment" placeholder="Add a comment" required />
      <button type="submit">Post</button>
    </form>

    <button @click="showUpdateForm = !showUpdateForm">Update Post</button>
    <button @click="deletePost">Delete Post</button>

    <div v-if="showUpdateForm">
      <form @submit.prevent="submitUpdate">
        <input v-model="updatedTitle" placeholder="Update title" required />
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
<style scoped>
.post {
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.comments {
  margin-top: 10px;
}
</style>