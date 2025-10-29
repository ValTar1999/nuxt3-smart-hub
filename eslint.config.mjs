// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'any'
        }
      }
    ],
    'vue/no-multiple-template-root': 'off'
  }
})
