module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "commonjs": true,
    "browser": true
  },
  "extends": ["airbnb"],
  "plugins": ["react", "babel", "promise", "import"],
  "rules": {
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}
