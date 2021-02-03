module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { VariableDeclarator: 1 }]
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier/vue', '@vue/typescript']
};
