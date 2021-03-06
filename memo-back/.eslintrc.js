module.exports = {
  "extends": ["airbnb", "plugin:flowtype/recommended"],
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "no-console": 0,
    "consistent-return": 0,
    "arrow-body-style": 0
  },
  "plugins": [
    "flowtype"
  ]
};