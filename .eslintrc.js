module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'babel', 'promise', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
