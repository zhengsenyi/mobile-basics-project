const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: 'static',
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  lintOnSave: false,//关闭eslint
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-px2rem')({remUnit: 37.5}), // 换算的基数
              ]
          }
      }
  },
  devServer: {
    port: 8888, // 服务运行时占用的端口号
    https: false, // 是否为 https协议
    hotOnly: true, // 开启热更新
    open: true, // 构建完成自动打开浏览器
    proxy: { // 设置代理
      '/api': {
        target: process.env.VUE_APP_API,
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        } 
      }
    }
  } 
}