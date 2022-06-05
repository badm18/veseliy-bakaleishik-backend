module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'typescript'
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'typescript'
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "import/prefer-default-export": "off",
    "no-useless-constructor": "off",
    "dot-notation": "off",
    "camelcase": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "indent": ["error", 2],
    "semi" : "off" ,
    "@typescript-eslint/semi" : [ "error" ],
    "import/no-extraneous-dependencies": "warn",
    "class-methods-use-this": "warn",
    "object-curly-newline": "warn",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    }
  }
};
