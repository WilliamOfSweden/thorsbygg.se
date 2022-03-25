import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { THEME } from '../../styles/theme'

const StyledFooter = styled.footer`
  background-color: ${THEME.palette.primary};
  color: ${THEME.palette.textInverse};
  padding: ${THEME.spacing(4)} 0;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-inline: auto;
    width: min(${THEME.breakpoints.xl}, 100% - ${THEME.spacing(4)});

    a {
      color: ${THEME.palette.textInverse};
      font-size: 1.2rem;

      & > span {
        text-decoration: underline;
      }
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
      <div>
        <a
          aria-label='Link to developers website.'
          href='https://daghouz.com'
          rel='noreferrer noopener'
          target='_blank'
        >
          Website developed by <span>{author}</span>.
        </a>
      </div>
    </StyledFooter>
  )
}
