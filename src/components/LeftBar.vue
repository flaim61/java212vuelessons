<template>
  <div class="LeftBar">
    <a class="LeftBar_link" @click='this.$router.push("/home");'>Главная</a>
    <a class="LeftBar_link" @click='this.$router.push("/photos");'>Фото</a>
    <a class="LeftBar_link" @click='this.$router.push("/users");'>Пользователи</a>
  </div>
</template>

<script>
  export default {
    name: "LeftBar"
  }
</script>

<style>
  .LeftBar{
    border-right: 1px solid black;
    width: 200px;
    display: flex;
    flex-direction: column;
  }
  .LeftBar_link{
    text-align: center;
    border: 1px solid black;
    margin: 5px;
  }
</style>
