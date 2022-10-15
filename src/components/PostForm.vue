<template>
  <form @submit.prevent>
    <h1>Create post</h1>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Title"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Description"
    />
    <my-button 
      style="align-self: flex-end; margin-top: 15px;"
      @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post, "second param", "3 param");
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>

<style>
  
form {
  display: flex;
  flex-direction: column;
}
.post {
  padding: 15px;
  border: 1px solid blue;
  margin-top: 15px;
}



</style>