<template>
  <div class="app">
    <form @submit.prevent>
      <h1>Create post</h1>
      <input
       v-bind:value="title"
       @input="title = $event.target.value"
       class="input"
       type="text"
       placeholder="Title"
      >
      <input
       v-bind:value="body"
       @input="body = $event.target.value"
       class="input"
       type="text"
       placeholder="Description"
      >
      <button 
      class="btn"
       @click="createPost"
      >
        Create
      </button>
    </form>

    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title}}</div>
      <div><strong>Описание:</strong> {{ post.body}}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Vue3', body: 'Описание 1'},
        {id: 2, title: 'Vue2', body: 'Описание 2'},
        {id: 3, title: 'Vue1', body: 'Описание 3'},
        {id: 4, title: 'VueEx', body: 'Описание 4'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
    },

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
.post {
  padding: 15px;
  border: 1px solid blue;
  margin-top: 15px;
}
.input {
  width: 100%;
  border: 1px solid blue;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: blue;
  border: 1px solid blue;
}
</style>