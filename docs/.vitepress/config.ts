import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'yjs-vue',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'hello', link: '/hello' },
          { text: 'cursor', link: '/cursor' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/croatialu' },
    ],
  },
})
