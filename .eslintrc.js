module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential', // Vue.js 的 ESLint 规则
      'eslint:recommended', // ESLint 推荐规则
      '@vue/prettier', // 如果使用了 Prettier
    ],
    parserOptions: {
      parser: 'babel-eslint', // 使用 Babel 解析器
    },
    rules: {
      // 自定义规则
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };