module.exports = {
  title: 'Gestal Cloud',
  description: 'Learn how to build an integration, send data for synchronization or interact with farm sites using our Web API.',
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Web API', link: '/api/' }
    ],
    sidebar: {
      '/api/': [
        {
          title: 'Web API',
          children: [
            'getting-started'
          ]
        }
      ]
    }
  }
}
