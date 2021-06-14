module.exports = {
  rules: {
    // We use JS as a valid file extension for files with JSX in it.
    "react/jsx-filename-extension": "off",
    // We want to be allowed to forward props on in general.
    "react/jsx-props-no-spreading": "off",
    // We have some examples of next JS links that are not valid a tags
    "jsx-a11y/anchor-is-valid": "off",
    // In React world, we allow default exports.
    "import/no-default-export": "off",
    // Self close tags
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
