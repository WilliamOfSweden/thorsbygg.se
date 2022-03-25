import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { THEME } from '../../styles/theme'

const StyledFooter = styled.footer`
  background-color: ${THEME.palette.primary};
  color: ${THEME.palette.textInverse};
  padding: ${THEME.spacing(4)} 0;

  a {
    color: ${THEME.palette.textInverse};
    display: block;
    font-size: 1.2rem;
    margin-inline: auto;
    text-align: center;
    width: min(${THEME.breakpoints.sm}, 100% - ${THEME.spacing(4)});

    & > span {
      text-decoration: underline;
    }
  }
`

export const Footer = () => {
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
