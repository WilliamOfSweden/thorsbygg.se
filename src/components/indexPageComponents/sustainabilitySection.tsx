import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { THEME } from '../../styles/theme'

const StyledSection = styled.section`
  margin-inline: auto;
  padding-bottom: ${THEME.spacing(8)};
  width: min(700px, 100% - ${THEME.spacing(4)});

  @media screen and (min-width: 700px) {
    h2,
    p {
      text-align: center;
    }
  }
`

export const SustainabilitySection = () => {
  const {
    file: { childrenMarkdownRemark },
  } = useStaticQuery(
    graphql`
      query IndexPageSustainabiltySectiondQuery {
        file(
          absolutePath: { regex: "/content/indexPage/sustainablitySection/" }
        ) {
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
      <StaticImage
        src='../../images/sustainability.jpeg'
        alt='Flowers layed on white background, in a heart shape.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledSection>
  )
}
