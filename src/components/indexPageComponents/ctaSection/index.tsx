import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { StyledCtaSection } from './styledCtaSection'
import { StyledButton } from '../../layout/styledComponents/'

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
    <StyledCtaSection>
      <h2>{title}</h2>
      <p>{content}</p>
      <StyledButton onClick={() => scrollTo('#contact')}>
        Kontakta oss
      </StyledButton>
    </StyledCtaSection>
  )
}
