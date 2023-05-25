<template>
  <!--
    Склонировать репозиторий:
    Зайти в терминале в папку с проектом через cd {Путь до проекта}
    npm install
    npm run dev

    1) Создать фотографии, сделать функционал добавления комментария к фото
  -->
  <LeftBar />
  <div class="app">
    <RouterView />
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import LeftBar from './components/LeftBar.vue'

  export default {
    name: "App",
    components:{
      LeftBar,
      RouterView
    }
  }
</script>

<style>
  .app{
    padding: 5px;
    width: 100%;
  }
</style>
