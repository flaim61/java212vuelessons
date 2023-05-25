<template>
  <div class="profile">
    <ProfileInfo />
    <MyPosts />
  </div>
</template>

<script>
  import ProfileInfo from '../components/Profile/ProfileInfo.vue'
  import MyPosts from '../components/Profile/MyPosts.vue'

  export default {
    name: "Home",
    components:{
      ProfileInfo,
      MyPosts
    }
  }
</script>


<style>

</style>
