import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { PALETTE } from '../../../styles/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerGrid: {
      ['&:nth-child(odd)']: {
        background: PALETTE.bgAlt,
      },
      ['&:nth-child(even)']: {
        [theme.breakpoints.up('md')]: {
          flexDirection: `row-reverse`,
        },
      },
    },
    textWrapper: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
      },
    },
  })
)

const ServicesSection = () => {
  interface DataProps {
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
          }
          internal: {
            content: string
          }
        }
      }[]
    }
  }

  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<DataProps>(
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

  const classes = useStyles()

  return (
    <section>
      {edges.map(edge => {
        return (
          <Grid
            className={classes.outerGrid}
            container
            alignItems='stretch'
            key={edge.node.id}
          >
            <Grid item xs={12} md={6}>
              <GatsbyImage
                alt={'hej'}
                image={
                  edge.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                style={{ height: `100%` }}
              />
            </Grid>
            <Grid className={classes.textWrapper} item xs={12} md={6}>
              <Typography color='primary' variant='h3'>
                {edge.node.frontmatter.title}
              </Typography>
              <Typography>{edge.node.internal.content}</Typography>
            </Grid>
          </Grid>
        )
      })}
    </section>
  )
}

export default ServicesSection
