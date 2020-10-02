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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    ...mapState([
      'userInfo',
      'issues'
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo',
      'getIssues'
    ]),
  },
  created () {
    window.$t = this
    this.getUserInfo()
    this.getIssues()
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  font-family: Rubik,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: calc(10px + .33vw);
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  margin: 0 15vw;

  @media screen and (max-width: 992px) and (min-width: 768px) {
    margin: 0 5vw;
  }
}

</style>
