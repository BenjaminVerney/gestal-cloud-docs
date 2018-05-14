module.exports = {
  title: 'Gestal Cloud',
  description: 'Learn how to build an integration, send data for synchronization or interact with farm sites using our Web API.',
  dest: 'dist',
  themeConfig: {
    logo: '/logo.svg',
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
