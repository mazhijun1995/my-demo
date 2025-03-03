const path = require('path'); // 导入 path 模块
// vue.config.js
module.exports = {
  configureWebpack: {
    // 自定义 Webpack 配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    port: 8080, // 开发服务器端口
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 代理后端 API
        changeOrigin: true
      }
    }
  },
  lintOnSave: false, // 关闭 ESLint 检查
};