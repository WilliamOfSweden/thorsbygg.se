import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { THEME } from '../../styles/theme'
import { StyledButton } from '../shared'

const StyledSection = styled.section`
  margin-inline: auto;
  padding-bottom: ${THEME.spacing(8)};
  padding-top: ${THEME.spacing(8)};
  width: min(${THEME.breakpoints.sm}, 100% - ${THEME.spacing(4)});

  h2 {
    @media (min-width: ${THEME.breakpoints.sm}) {
      text-align: center;
    }
  }

  p {
    margin-bottom: ${THEME.spacing(2)};
  }
`

export const CTASection = () => {
  const {
    file: {
      childrenMarkdownRemark: [
        {
          internal: { content },
          frontmatter: { title },
        },
      ],
    },
  } = useStaticQuery(
    graphql`
      query IndexPageCtaSectionQuery {
        file(absolutePath: { regex: "/content/indexPage/ctaSection/" }) {
          childrenMarkdownRemark {
            frontmatter {
              title
            }
            internal {
              content
            }
          }
        }
      }
    `
  )

  return (
    <StyledSection>
      <h2>{title}</h2>
      <p>{content}</p>
      <StyledButton onClick={() => scrollTo('#contact')}>
        Kontakta oss
      </StyledButton>
    </StyledSection>
  )
}
