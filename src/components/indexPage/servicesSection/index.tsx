import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { PALETTE } from '../../../styles/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      height: `100%`,
    },
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
    section: {
      maxWidth: '1536px',
    },
    textWrapper: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: 'center',
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(4),

      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(8),
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
            imageAlt: string
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

  const classes = useStyles()

  return (
    <section className={classes.section}>
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
                alt={edge.node.frontmatter.imageAlt}
                className={classes.img}
                image={
                  edge.node.frontmatter.image.childImageSharp.gatsbyImageData
                }
              />
            </Grid>
            <Grid className={classes.textWrapper} item xs={12} md={6}>
              <Typography color='primary' variant='h3' gutterBottom>
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
