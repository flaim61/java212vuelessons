<template>
  <h2>
    Мои посты
  </h2>
  <div class="add_post_form">
    <label for="">Заголовок</label>
    <input type="text" v-model="title" placeholder="Введите заголовок">
    <label for="">Текст</label>
    <textarea name="name" v-model="body" placeholder="Введите текст"></textarea>
    <span @click='addPost' class="addButton">Отправить</span>
  </div>
  <div class="post" v-for="(post, index) in this.posts" @click='this.$router.push("/post/"+post.id);'>
    <div class="post_header">
      <h4>
        {{ post.title }}
      </h4>
      <div @click='this.deletePost(index)' class="deletePostButton">
        x
      </div>
    </div>
    <p>
      {{ post.body }}
    </p>
  </div>
</template>

<script>
  import { getPosts } from '@/services/index.js'

  export default {
    name: "MyPosts",
    data(){
      return {
        title: "",
        body: "",
        posts: [],
      }
    },
    async created(){
      this.posts = await this.getPosts();
    },
    methods: {
      addPost(){
        this.posts.unshift({
          title: this.title,
          body: this.body
        });

        this.title = "";
        this.body = "";
      },
      deletePost(index){
        this.posts.splice(index, 1);
      },
      async getPosts(){
        const response = await getPosts();

        if (response.status === 200) {
          return response.data;
        }else{
          return [];
        }
      }
    },
  }
</script>

<style>
  .deletePostButton{
    cursor: pointer;
  }
  .post_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .add_post_form{
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid black;
    margin-bottom: 10px
  }
  .post{
    width: 98%;
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
