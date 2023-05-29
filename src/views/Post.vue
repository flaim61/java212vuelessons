<template>
  <div class="profile" v-if='this.post'>
    <h3>
      {{post.title}}
    </h3>
    <p>
      {{post.body}}
    </p>
  </div>
  <div class="addCommentPost">
    <input v-model="this.name" placeholder="Введите ваше имя" type="text" >
    <textarea v-model="this.body"  placeholder="Введите текст комментария" rows="5" ></textarea>
    <a @click='addComment'>Добавить</a>
  </div>
  <div class="comments">
    <div v-for="(comment, index) in this.comments">
      <h5>{{comment.name}}</h5>
      <p>{{comment.body}}</p>
    </div>
  </div>
</template>

<script>
  import { getPost, getCommentsByPostId } from '@/services/index.js'


  export default {
    name: "Post",
    components:{

    },
    async created(){
      this.post = await this.getPost();
      this.comments = await this.getCommentsByPostId();
    },
    data(){
      return {
        post: null,
        comments: [],
        name: "",
        body: ""
      }
    },
    methods: {
      addComment(){
        this.comments.unshift({
          name: this.name,
          body: this.body
        })

        this.name = "";
        this.body = "";
      },
      async getPost(){
        const response = await getPost(this.$route.params.id);

        if (response.status === 200) {
          return response.data
        }else{
          return new Object;
        }
      },
      async getCommentsByPostId(){
        const response = await getCommentsByPostId(this.$route.params.id);

        if (response.status === 200) {
          return response.data
        }else{
          return [];
        }
      }
    }
  }
</script>


<style>
  .addCommentPost{
    margin-top: 20px;
  }
  .addCommentPost>input, .addCommentPost>textarea{
    width: 100%;
  }
  .comments{
    margin-top: 30px;
  }
  .comments>div{
    border: 1px solid black;
    padding: 10px;
  }
  .comments>div>h5{
    font-size: 20px;
    margin-bottom: 15px;
  }
  h3{
    margin-bottom: 20px;
    font-size: 25px;
  }
</style>
