import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          ogDescription
          ogImageUrl
          ogType
          siteDescription
          siteTitle
          siteUrl
        }
      }
    }
  `)

  const {
    ogDescription,
    ogImageUrl,
    ogType,
    siteDescription,
    siteTitle,
    siteUrl,
  } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang='sv-SE' />
      <meta charSet='UTF-8' />
      <meta name='description' content={siteDescription} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImageUrl} />
      <title>{siteTitle}</title>
    </Helmet>
  )
}

export default SEO
