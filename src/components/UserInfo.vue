<template>
  <div class="user-info">
    <img alt="avatar" class="avatar" :src="userInfo?.avatar_url">
    <div class="user-info-name">{{ userInfo?.name }}</div>
    <div class="user-info-login">{{ userInfo?.login }}</div>
    <div class="user-info-buttons">
      <button @click="follow">Follow</button>
      <button @click="star">Star</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import config from '$config'
export default {
  name: 'UserInfo',
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },
  methods: {
    follow () {
      window.open(`https://github.com/${config.username}`)
    },
    star () {
      window.open(`https://github.com/${config.username}/vue-issue-blog`)
    }
  }
}
</script>

<style lang="scss">
  .user-info {
    .avatar {
      border-radius: 50%;
      width: 100%;
      border: 1px solid #e1e4e8!important;
    }
    .user-info-name {
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.25;
      text-align: center;
    }
    .user-info-login {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 300;
      color: #666;
      line-height: 1.25;
      text-align: center;
    }
    .user-info-buttons {
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-self: center;
      button {
        flex: 1 0 48%;
        overflow: hidden;
        color: #24292e;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border-radius: 6px;
        appearance: none;
        border: 1px solid;
        cursor: pointer;
        background-color: #fafbfc;
        border-color: rgba(27,31,35,.15);
        box-shadow: 0 1px 0 rgba(27,31,35,.04), inset 0 1px 0 hsla(0,0%,100%,.25);
        transition: background-color .2s cubic-bezier(.3,0,.5,1);

        &:hover {
          background-color: #f3f4f6;
          transition-duration: .1s;
        }

        &:active {
          outline: 0;
          background-color: #edeff2;
          box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
          transition: none;
        }
        &:focus {
          outline: 1px dotted transparent;
          outline-offset: 2px;
        }
      }
      button + button {
        margin-left: 5%;
      }
    }
  }
</style>