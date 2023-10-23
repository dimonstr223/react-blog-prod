module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:i18next/recommended'],
  'overrides': [{
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
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint', 'i18next'],
  'rules': {
    'indent': [2, 2],
    'linebreak-style': ['error', 'windows'],
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
    'no-undef': ['warn']
  },
  'globals': {
    __IS_DEV__: true
  }
}
