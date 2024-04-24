// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
      'docs/.vitepress/dist',
      'docs/.vitepress/cache',
    ],
  },
  {
    rules: {
      // overrides
    },
  },
)
