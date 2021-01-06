// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'NWA',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.92.168:1337',
        queryLimit: 1000,
        contentTypes: ['post'],
        // singleTypes: ['impressum']
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  },
}
