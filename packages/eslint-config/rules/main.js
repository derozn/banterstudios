module.exports = {
  plugins: ["import"],
  rules: {
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",

    "no-param-reassign": [2, { props: false }],

    "no-new": 0,

    "no-underscore-dangle": "off",

    complexity: ["warn", 8],
  },
};
