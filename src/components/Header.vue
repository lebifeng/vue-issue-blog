<template>
  <div class="header">
    <router-link 
      v-for="nav in config.navs" 
      :to="nav.link" 
      :key="nav.link"
      tag="li"
    > 
      {{ nav.text }}
    </router-link>
  </div>
</template>

<script>
import config from '$config'
export default {
  name: 'Header',
  data () {
    return {
      config,
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    text-align: center;
    padding: 24px 0px;
    color: #222;
    a {
      font-size: 2rem;
      font-weight: bolder;
      display: inline-block;
      transition: opacity linear 100ms 0ms;
      text-decoration: none;
      
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
      
    a + a {
      margin-left: 36px;
    }

    a:visited {
      color: inherit;
    }
  }
    
    
</style>