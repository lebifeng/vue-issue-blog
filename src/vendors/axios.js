import axios from 'axios';
import config from '../../config'

const {
  accessToken,
} = config

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3.html',
    Authorization: `token ${accessToken}`,
  },
});

export default instance