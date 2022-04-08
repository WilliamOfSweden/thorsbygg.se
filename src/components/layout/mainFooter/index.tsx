import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledFooter } from './styledFooter'

export const MainFooter = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <a
        aria-label='Link to developers website.'
        href='https://daghouz.com'
        rel='noreferrer noopener'
        target='_blank'
      >
        Website developed by <span>{author}</span>.
      </a>
    </StyledFooter>
  )
}
