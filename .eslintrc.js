module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:nuxt/recommended',
  ],
  rules: {
    semi: 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'vuejs-accessibility/no-onchange': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
  },
}
