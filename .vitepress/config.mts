import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "chumengD's Blog",
  description: "个人博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '博客', link: '/jmcomic' }
    ],

    sidebar: [
      {
        text: '博客',
        items: [
          { text: 'AstrBot + NapCat + JMComic 漫画下载器', link: '/jmcomic' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
