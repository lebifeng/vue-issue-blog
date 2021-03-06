import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Posts from '@/pages/Posts'
import Post from '@/pages/Post'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/posts',
      component: Posts
    }, {
      path: '/posts/:id',
      component: Post
    }, {
      path: '/about',
      component: About
    }
  ]
})

export default router