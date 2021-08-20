import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: `none`,
      [theme.breakpoints.up('sm')]: {
        display: `block`,
      },
    },
    mobileOnly: {
      [theme.breakpoints.up('sm')]: {
        display: `none`,
      },
    },
    section: {
      // height: `100vh`,
      // [theme.breakpoints.up('sm')]: {
      //   height: `100vh`,
      // },
    },
  })
)

const Masthead: FC = () => {
  const {
    markdownRemark: {
      internal: { content },
    },
  } = useStaticQuery(
    graphql`
      query IndexPageMastheadQuery {
        markdownRemark(frontmatter: { title: { eq: "index-page-masthead" } }) {
          internal {
            content
          }
        }
      }
    `
  )

  const classes = useStyles()

  return (
    <Box
      className={classes.section}
      component='section'
      bgcolor='#fefefe'
      pt={10}
    >
      <Typography variant='h1' align='center'>
        Thors Bygg
      </Typography>
      <Typography align='center'>{content}</Typography>
      <StaticImage
        className={classes.desktopOnly}
        src='../../../images/hero-img-landscape.jpeg'
        alt='Miniature house standing in blueprints with bricks in front of it.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <StaticImage
        className={classes.mobileOnly}
        src='../../../images/hero-img-portrait.jpeg'
        alt='Miniature house standing in blueprints with bricks in front of it.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </Box>
  )
}

export default Masthead
