import { IGatsbyImageData } from 'gatsby-plugin-image'

interface Services {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          image: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData
            }
          }
          imageAlt: string
        }
        internal: {
          content: string
        }
      }
    }[]
  }
}
