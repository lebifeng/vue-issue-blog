import axios from '@/vendors/axios'
import config from '$config'

const {
  username,
  issueRepo,
} = config

export function fetchIssues () {
  let url = `/repos/${username}/${issueRepo}/issues`;
  return axios.get(url)
}

export function fetchIssuesByTitle (title) {
  let url = `/search/issues?q=repo:${username}/${issueRepo}+${title} in:title`;
  return axios.get(url)
}

export function fetchUserInfo () {
  let url = `/users/${username}`;
  return axios.get(url)
}

export function fetchIssueByNumber (number) {
  let url = `/repos/${issueRepo}/issues/${number}`;
  return axios.get(url)
}