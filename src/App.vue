<template>
  <div>
    <Header/>
    <div>
      <router-view></router-view>
    </div>
    <div>footer</div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    // console.log(1)
    // console.log(this.$router)
    // listIssues().then(console.log)
    // searchIssuesByTitle('Testing').then(console.log)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  padding: 0;
  margin: 0;
}

</style>
