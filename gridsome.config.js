// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Banana',
  siteDescription: '大前端',
  siteUrl: 'https://www.baidu.com/',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: '/content/blog/**/*.md'
    }
  }, {
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['articles', 'categories', 'blog-news', 'themes'],
      // singleTypes: ['impressum'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      loginData: {
        identifier: '15822371653@163.com',
        password: 'Gao12345678'
      }
    }
  }],
  templates: {
    StrapiArticles: [
      {
        path: '/projects/:id',
        component: './src/templates/projects/prokect.vue'
      }
    ],
    StrapiBlogNews: [
      {
        path: '/journal/:id',
        component: './src/templates/journal/items.vue'
      }
    ]
  }
}
