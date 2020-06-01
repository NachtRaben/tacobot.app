const sidebar = require('./sidebar.js');

const config = {
  title: 'Taco Bot',
  description: 'Manage Trello boards and get notified of board updates straight from Discord!',
  main: 'layouts/Layout.vue',
  head: [
    // Manifest
    ['link', { rel: 'icon', href: '/logo_happy.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

    // Icons
    ['link', { rel: 'mask-icon', href: '/logo/safari-pinned-tab.svg', color: '#93a01e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/logo/favicon-16x16.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/logo/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '192x192', href: '/logo/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', sizes: '512x512', href: '/logo/android-chrome-512x512.png' }],

    // Theme Color
    ['meta', { name: 'theme-color', content: '#93a01e' }],
    ['meta', { name: 'msapplication-TileColor', content: '#93a01e' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:url', content: 'https://tacobot.app/' }],
    ['meta', { name: 'twitter:title', content: 'Taco Bot' }],
    ['meta', { name: 'twitter:description', content: 'Manage Trello boards and get notified of board updates straight from Discord!' }],
    ['meta', { name: 'twitter:image', content: '/logo_happy.png' }],

    // OpenGraph
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://tacobot.app/' }],
    ['meta', { name: 'og:title', content: 'Taco Bot' }],
    ['meta', { name: 'og:description', content: 'Manage Trello boards and get notified of board updates straight from Discord!' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:image', content: '/logo_happy.png' }],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-167866550-1' }
    ],
    [
      'vuepress-plugin-zooming',
      { 
        selector: 'img:not(.logo):not([alt="hero"]):not([no-zoom])',
        options: {
          bgColor: 'black',
          bgOpacity: 0.5
        }
      }
    ],
    '@vuepress/pwa',
    '@vuepress/last-updated'
  ],
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Support', link: 'https://discord.gg/fJrZZ7V' },
      { text: 'Invite Taco', link: 'https://discord.com/oauth2/authorize?client_id=617830404103077928&permissions=536931392&scope=bot' }
    ],
    sidebar,
    nextLinks: true,
    prevlinks: true,
    repo: 'trello-talk/TrelloBot',
    repoLabel: 'Contribute on GitHub!',
    docsRepo: 'trello-talk/tacobot.app',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page on GitHub!',
    logo: '/logo_happy.svg',
    smoothScroll: true
  }
}

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}
module.exports = config;
