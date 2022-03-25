import { GatsbyConfig } from 'gatsby'
import path from 'path'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    author: 'William Daghouz',
    ogDescription: `Vi utför totalentreprenader, underentreprenader, nybyggnation, ombyggnation, tillbyggnation och mindre servicearbeten.`,
    ogImageUrl: `https://thorsbygg.se/banner.png`,
    ogType: 'website',
    siteDescription: `Company Websites | Thors Bygg`,
    siteTitle: `Thors Bygg`,
    siteUrl: `https://thorsbygg.se`,
    twitterCard: 'summary_large_image',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `conten`,
        path: path.resolve(`content/`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images/`),
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
  ],
}

export default gatsbyConfig
