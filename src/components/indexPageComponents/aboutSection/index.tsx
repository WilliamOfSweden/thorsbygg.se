import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { StyledSection } from './styledSection'

export const AboutSection = () => {
  const {
    file: { childrenMarkdownRemark },
  } = useStaticQuery(
    graphql`
      query IndexPageAboutSectiondQuery {
        file(absolutePath: { regex: "/content/indexPage/aboutSection/" }) {
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
    <StyledSection>
      <div>
        <div>
          <StaticImage
            alt='A contstruction worker standing with a couple.'
            formats={['auto', 'webp', 'avif']}
            layout='fullWidth'
            loading='eager'
            placeholder='none'
            src='../../images/about.jpeg'
          />
        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
