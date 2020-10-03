<template>
  <div class="home">
    <div class="home-left">
      <UserInfo/>
    </div>
    <div class="home-right">
      <LastUpdatedBlogs/>
      <Repos/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LastUpdatedBlogs from '@/components/LastUpdatedBlogs'
import Repos from '@/components/Repos'
import UserInfo from '@/components/UserInfo'

export default {
  name: 'Home',
  components: {
    LastUpdatedBlogs,
    Repos,
    UserInfo,
  },
  computed: {
    ...mapState([
      'userInfo',
    ])
  },
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;

    .home-left { 
      padding: 1rem;
      flex: 1 0 30%;
    }
    .home-right { 
      padding: 1rem;
      flex: 1 0 70%;
    }
  }
</style>