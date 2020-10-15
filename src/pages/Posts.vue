<template>
  <div class="posts">
    <div class="tags-container">
      <Tags @click-tag="selectTag" :selected-tag="currentTag"/>
    </div>
    <router-link :to="`/posts/${issue.number}`" v-for="issue in filteredIssues" :key="issue.number">
      {{ issue.title }}
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tags from '@/components/Tags'
export default {
  name: 'posts',
  components: {
    Tags,
  },
  data () {
    return {
      currentTag: null
    }
  },
  computed: {
    ...mapState([
      'issues'
    ]),
    filteredIssues () {
      const closedIssues = this.issues.filter((issue) => {
        return issue.state === 'closed'
      })

      if (!this.currentTag) {
        return closedIssues
      }
      return closedIssues.filter((issue) => {
        return issue.labels.map((label) => label.name).includes(this.currentTag)
      })
    },
  },
  methods: {
    selectTag (e) {
      console.log(e)
      if (this.currentTag && this.currentTag === e) {
        this.currentTag = null
      } else {
        this.currentTag = e
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    display: flex;
    flex-flow: column;
    a {
      font-size: 1.3rem;
      color: #333;
      text-decoration: none;
      :visited {
        color: inherit;
      }
      &:hover {
        opacity: 0.7;
      }
    }
    a + a {
      margin-top: 2rem;
    }
    padding-bottom: 5rem;
  }

  .tags-container {
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 24px;

    @media screen and (max-width: 441px) {
      display: none;
    }
  }
</style>