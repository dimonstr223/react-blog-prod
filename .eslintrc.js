module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  overrides: [{
    'env': {
      'node': true
    },
    'files': ['.eslintrc.{js,cjs}', '**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    },
    'parserOptions': {
      'sourceType': 'script'
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'indent': [2, 2],
    'linebreak-style': ['warn', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_'
    }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-deprecated': 'off',
    'i18next/no-literal-string': ['warn', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-undef': ['warn'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error' // Checks effect dependencies
  },
  globals: {
    __IS_DEV__: true
  }
}
