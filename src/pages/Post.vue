<template>
  <div v-html="content" class="markdown-body"/>
</template>

<script>
import 'github-markdown-css/github-markdown.css';
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Post',
  computed: {
    ...mapState([
      'issues'
    ]),
    content () {
      if (this.issues) {
        const target = this.issues.find((o) => {
          return +o.number === +this.$route.params.id
        })
        return target.body_html || null
      } else {
        return null
      }
    },
  },
  methods: {
    ...mapActions([
      'getIssues'
    ]),
  },
}
</script>

<style lang="scss">
  .markdown-body {
    h1 {
      border-bottom: none;
      text-align: center;
    }
  }
</style>