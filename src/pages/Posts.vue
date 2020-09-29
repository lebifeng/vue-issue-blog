<template>
  <div>
    <div v-for="issue in issues" :key="issue.number">
      {{ issue.title }}
    </div>
  </div>
</template>

<script>
import setup from '../composition/issues'
export default {
  name: 'posts',
  setup () {
    const {
      setupIssues,
      issues,
    } = setup()
    setupIssues()
    return {
      issues
    }
  }
}
</script>

<style>

</style>