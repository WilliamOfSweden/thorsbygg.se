import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

import { Services } from '../../../@types/'
import { StyledServicesSection } from './styledServicesSection'

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
    <StyledServicesSection>
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
    </StyledServicesSection>
  )
}
