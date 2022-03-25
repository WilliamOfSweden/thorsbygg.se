import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { THEME } from '../../styles/theme'

const StyledSection = styled.section`
  & > div {
    @media (min-width: ${THEME.breakpoints.md}) {
      align-items: stretch;
      display: flex;

      & > div {
        flex: 1 1 50%;
      }

      & > div:nth-child(2) {
        align-items: center;
        background-color: ${THEME.palette.bgAlt};
        display: flex;
        justify-content: center;

        & > div {
          max-width: 70ch;

          & > h2 {
            font-size: 3rem;
          }
        }
      }
    }

    & > div:first-child > div {
      height: 100%;
    }

    & > div:nth-child(2) {
      padding: ${THEME.spacing(4)} ${THEME.spacing(2)};
    }
  }
`

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
            alt='A contstruction worker pointing with a couple.'
            formats={['auto', 'webp', 'avif']}
            layout='fullWidth'
            loading='eager'
            placeholder='none'
            src='../../../images/about.jpeg'
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
