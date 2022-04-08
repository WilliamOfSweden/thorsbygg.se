import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledSection } from './styledSection'
import { BgImage } from './bgImage'

export const Masthead = () => {
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
      query IndexPageMastheadQuery {
        file(absolutePath: { regex: "/content/indexPage/masthead/" }) {
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
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <BgImage />
    </StyledSection>
  )
}
