module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'jsx-ally/click-events-have-key-events': 'off',
    'jsx-ally/no-noninteractive-element-interactions': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'jsx-quotes': {'prefer-single': true},
  },
};
