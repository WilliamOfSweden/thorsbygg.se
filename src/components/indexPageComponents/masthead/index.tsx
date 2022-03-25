import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { THEME } from '../../../styles/theme'
import { BgImage } from './bgImage'

const StyledSection = styled.section`
  & > div:first-child {
    padding-left: ${THEME.spacing(2)};
    padding-right: ${THEME.spacing(2)};
    padding-top: ${THEME.spacing(10)};
  }

  & > div > p {
    text-align: center;
    font-family: ${THEME.fonts.subHeading};
    font-size: 2rem;

    @media (min-width: ${THEME.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
`

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
