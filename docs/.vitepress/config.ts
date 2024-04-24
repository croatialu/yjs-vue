import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'yjs-vue',
  description: 'A VitePress Site',
  base: '/yjs-vue',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/example/' },
    ],

    sidebar: [
      {
        text: 'API',
        items: [
          { text: 'useMap', link: '/api/useMap' },
          { text: 'useWebRtc', link: '/api/useWebRtc' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'hello', link: '/examples/hello' },
          { text: 'cursor', link: '/examples/cursor' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/croatialu/yjs-vue' },
    ],
  },
})
