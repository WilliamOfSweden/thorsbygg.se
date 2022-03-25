import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

import { THEME } from '../../styles/theme'
import { Services } from '../../@types'

export const StyledSection = styled.section`
  & > div {
    @media (min-width: ${THEME.breakpoints.md}) {
      align-items: stretch;
      display: flex;

      & > div {
        flex: 1 1 50%;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      &:nth-child(odd) {
        background-color: ${THEME.palette.bgAlt};
      }

      & > div:nth-child(2) {
        align-items: center;
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

export const ServicesSection = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<Services>(
    graphql`
      query IndexPageServicesSectionQuery {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "content/indexPage/servicesSection/" }
          }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                imageAlt
              }
              internal {
                content
              }
            }
          }
        }
      }
    `
  )

  return (
    <StyledSection>
      {edges.map(edge => {
        return (
          <div key={edge.node.id}>
            <div>
              <GatsbyImage
                alt={edge.node.frontmatter.imageAlt}
                image={
                  edge.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <div>
              <div>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.internal.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </StyledSection>
  )
}
