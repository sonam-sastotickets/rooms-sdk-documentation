import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ST Rooms SDK",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: 'Introduction', link: '/index' },
          { text: 'Authorization', link: '/authorization' },
          { text: 'Integration with Apps', link: '/getting-started' },
          { text: 'Payment', link: '/payment' },
          { text: 'Ticketing', link: '/ticketing' },
          { text: 'Download', link: '/download' },
          { text: 'Details', link: '/details' },
          { text: 'Postman', link: '/postman' },
          // { text: 'Booking', link: '/booking' },
          // { text: 'Postman', link: '/postman' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
