import { fetchIssues } from '@/services'
import { ref } from 'vue'
import _get from 'lodash.get'

function setup () {
  const issues = ref([])

  const setupIssues = () => {
    fetchIssues().then((res) => {
      issues.value = _get(res, 'data')
    })
  }
  return {
    setupIssues,
    issues
  }
}

export default setup