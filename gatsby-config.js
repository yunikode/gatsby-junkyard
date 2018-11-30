module.exports = {
  siteMetadata: {
    title: `junkYard`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['PT Sans', 'Dosis', 'Share Tech Mono']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component'
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '`',
              aliases: {}
            }
          }
          // `gatsby-remark-responsive-iframe`,
        ]
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        productionPrefix: 'mat'
      }
    },
    `gatsby-plugin-jss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
