import { listIssues } from '../services'
import { ref } from 'vue'
import _get from 'lodash.get'

function setup () {
  const issues = ref([])

  const setupIssues = () => {
    listIssues().then((res) => {
      console.log(res)
      issues.value = _get(res, 'data')
    })
  }
  return {
    setupIssues,
    issues
  }
}

export default setup