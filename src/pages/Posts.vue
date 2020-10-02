<template>
  <div>
    <div v-for="issue in issues" :key="issue.number">
      <router-link :to="`/posts/${issue.number}`">
        {{ issue.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'posts',
   computed: {
    ...mapState([
      'issues'
    ])
  },
}
</script>

<style>

</style>