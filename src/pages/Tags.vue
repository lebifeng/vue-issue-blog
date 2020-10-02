<template>
  <ul class="tags">
    <li 
      v-for="tag in tags" 
      @click="$emit('click-tag', tag)"
      :class="{'selected': selectedTag === tag}"
      :key="tag"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Tags',
  props: ['selectedTag'],
  computed: {
    ...mapState([
      'issues'
    ]),
    tags () {
      const result = [];
      (this.issues || []).forEach((issue) => {
        issue.labels.forEach((label) => {
          result.push(label.name)
        })
      })

      return [...new Set(result)]
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      list-style: none;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity linear 80ms 0ms;
      padding: 2px 5px;
      user-select: none;
      &:hover {
        opacity: 1
      }
      &.selected {
         background: #ccc;
        opacity: 1;
        border-radius: 3px;
      }
    }
    li + li {
      margin-left: 12px;
    }
  }
    
  
</style>