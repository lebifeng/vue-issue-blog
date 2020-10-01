const path = require('path')
module.exports = {
  publicPath: '/vue-issue-blog',
  chainWebpack: (config) => {
    config
      .resolve
      .alias
      .set('@', path.resolve('./src'))
      .set('$config', path.resolve('./config.js'))
  }
}