module.exports = {
  siteName: 'Pitt BBQ',
  siteDescription: 'Authentic Southern American pitt style barbeque caterer based in Middlesbrough catering to the surrounding areas and the North East of England.',
  siteUrl: 'https://wintergore.github.io',
  pathPrefix: '/gridsome-starter-bootstrap',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  }
}
