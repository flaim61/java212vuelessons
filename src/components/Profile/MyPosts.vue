<template>
  <h2>
    Мои посты
  </h2>
  <div class="add_post_form">
    <label for="">Заголовок</label>
    <input type="text" v-model="title" placeholder="Введите заголовок">
    <label for="">Текст</label>
    <textarea name="name" v-model="text" placeholder="Введите текст"></textarea>
    <span @click='addPost' class="addButton">Отправить</span>
  </div>
  <div class="post" v-for="(post, index) in this.posts">
    <h4>
      {{ post.title }}
    </h4>
    <p>
      {{ post.text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "MyPosts",
    data(){
      return {
        title: "",
        text: "",
        posts: [
          {
            id: 1,
            title: "Пост1",
            text: "Какой-то текст"
          },
          {
            id: 2,
            title: "Пост2",
            text: "Какой-то текст 2"
          },
          {
            id: 3,
            title: "Пост3",
            text: "Какой-то текст 3"
          },
          {
            id: 4,
            title: "Пост 4",
            text: "Какой-то текст"
          },
          {
            id: 5,
            title: "Пост5",
            text: "Какой-то текст"
          }
        ]
      }
    },
    methods: {
      addPost(){
        this.posts.push({
          title: this.title,
          text: this.text
        });

        this.title = "";
        this.text = "";
      }
    }
  }
</script>

<style>
  .add_post_form{
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid black;
    margin-bottom: 10px
  }
  .post{
    width: 100%;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 10px;
  }
  .post>h4{
    font-size: 20px;
    margin-bottom: 10px;
  }
  h2{
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .addButton{
    cursor: pointer;
    border: 1px solid black;
    padding: 5px;
    margin-top: 5px;
    width: fit-content;
  }
</style>
