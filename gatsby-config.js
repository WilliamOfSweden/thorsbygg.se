module.exports = {
  siteMetadata: {
    author: 'William Daghouz',
    ogDescription: `Vi utför totalentreprenader, underentreprenader, nybyggnation, ombyggnation, tillbyggnation och mindre servicearbeten.`,
    ogImageUrl: `https://thorsbygg.se/banner.png`,
    ogType: 'website',
    siteDescription: `Company Websites | Thors Bygg`,
    siteTitle: `Thors Bygg`,
    siteUrl: `https://thorsbygg.se`,
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
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
