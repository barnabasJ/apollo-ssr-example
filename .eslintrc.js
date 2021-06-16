module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:import/recommended', // https://github.com/benmosher/eslint-plugin-import
    'plugin:lodash/recommended', // https://github.com/wix/eslint-plugin-lodash
    'plugin:jest/recommended', // https://github.com/jest-community/eslint-plugin-jest
    'plugin:jsx-a11y/recommended', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:prettier/recommended', // needs to be last
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-lodash-typecheck': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.js'],
      rules: {
        'jest/expect-expect': 0, // do not expect expects in cypress tests
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: './webpack.config.ts',
        'config-index': 1,
      },
    },
  },
}
