module.exports = {
  siteMetadata: {
    title: `Poddhype`,
    description: `Matchar Brands med Poddar`,
    author: `@poddhype.com`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#8940fa',
        }
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/common/assets/poddhype-logo-squere.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`]
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `500`, `600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: true,
        id: 1669551,
        sv: 6
      }
    }
  ],
}
