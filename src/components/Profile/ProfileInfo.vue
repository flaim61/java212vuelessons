<template>
  <div class="profile_info">
    <img id='avatar' src="@/assets/img/profile.jpeg" alt="">
    <div class="profile_info_left">
      <p>
        Имя Фамилия
      </p>
      <p>
        19.19.2019
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
}
</script>

<style>
  .profile_info{
    display: flex;
  }
  #avatar{
    height: 200px;
    margin-right: 30px;
  }
  .profile_info_left>p{
    font-family: 'Montserrat', sans-serif;
  }
</style>
