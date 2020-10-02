<template>
  <div v-show="issue" >
    <div v-html="issue.body_html" class="markdown-body"></div>
  </div>
</template>

<script>
import 'github-markdown-css/github-markdown.css';
import { mapState } from 'vuex'
export default {
  name: 'Post',
  computed: {
    ...mapState([
      'issues'
    ]),
    issue () {
      const target = this.issues.find((o) => {
        return +o.number === +this.$route.params.id
      })
      console.log(target)
      return target
    },
  },
  created () {
    console.log(this.issue)
  }
}
</script>

<style>

</style>