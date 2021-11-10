import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledMasthead } from '../../layout/styledComponents/'
import BgImage from './bgImage'

const Masthead = () => {
  const {
    file: { childrenMarkdownRemark },
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

  const { content } = childrenMarkdownRemark[0].internal
  const { title } = childrenMarkdownRemark[0].frontmatter

  return (
    <StyledMasthead>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <BgImage />
    </StyledMasthead>
  )
}

export default Masthead
