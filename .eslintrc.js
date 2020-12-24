module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  extends: ['plugin:nuxt/recommended', 'eslint-config-prettier'],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
