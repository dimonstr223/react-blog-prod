module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  overrides: [{
    'env': { 'node': true },
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
      ignoreAttribute: ['data-testid', 'to', 'alt']
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true
  }
}
