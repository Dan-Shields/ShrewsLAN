module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/v-bind-style': 'warning',
    'vue/v-on-style': 'warning',
    'vue/no-v-html': 'warning',
    'vue/html-self-closing': ['error', {
      'html': {
        'component': 'never',
        'normal': 'never'
      }
    }],
    'vue/attribute-hyphenation': 'off',
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3
    }],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-use-before-define': ['error', { 'functions': false }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
