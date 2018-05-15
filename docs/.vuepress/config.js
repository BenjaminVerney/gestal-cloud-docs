module.exports = {
  title: 'Gestal Cloud API',
  description: 'Learn how to build an integration, send data for synchronization or interact with farm sites using our Web API.',
  dest: 'dist',
  serviceWorker: true,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0e335f' }],
    ['meta', { name: 'msapplication-TileColor', content: '#0e335f' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web API', link: '/api/getting-started.html' }
    ],
    sidebar: {
      '/api/': [
        {
          title: 'Web API',
          collapsable: false,
          children: [
            'getting-started',
            'integrations',
            'installations',
            'access-keys'
          ]
        },
        {
          title: 'Core Resources',
          collapsable: false,
          children: [
            'core/introduction',
            'core/sows',
            'core/feed-intakes'
          ]
        },
        {
          title: 'Mirror Resources',
          collapsable: false,
          children: [
            'mirror/introduction',
            'mirror/sow-mirrors'
          ]
        }
      ]
    }
  }
}
