import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { StyledSection } from './styledSection'
import { StyledButton } from '../../shared'

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
