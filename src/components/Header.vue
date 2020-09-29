<template>
  <div class="header">
    <router-link 
      v-for="nav in config.navs" 
      :to="nav.link" 
      :key="nav.link"
    > 
      {{ nav.text }}
    </router-link>
  </div>
</template>

<script>
import config from '../../config'
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
    font-size: 30px;
  }
</style>