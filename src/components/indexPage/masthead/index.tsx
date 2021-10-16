import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { StaticImage } from 'gatsby-plugin-image'

import { FONTS } from '../../../styles/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: `none`,
      [theme.breakpoints.up('sm')]: {
        display: `block`,
      },
    },
    heading: {
      fontSize: 'calc(2.1rem + 4.1vw) !important',
    },
    mobileOnly: {
      marginTop: `4rem`,
      [theme.breakpoints.up('sm')]: {
        display: `none`,
      },
    },
    subHeading: {
      fontFamily: FONTS.subHeading,
      fontSize: `calc(1rem + 2vw)`,
    },
  })
)

const Masthead = () => {
  const {
    file: { childrenMarkdownRemark },
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

  const { content } = childrenMarkdownRemark[0].internal
  const { title } = childrenMarkdownRemark[0].frontmatter

  const classes = useStyles()

  return (
    <Container component='section' maxWidth='xl' disableGutters>
      <Box pl={2} pr={2} pt={10}>
        <Typography
          className={classes.heading}
          color='primary'
          variant='h1'
          align='center'
        >
          {title}
        </Typography>
        <Typography align='center' className={classes.subHeading}>
          {content}
        </Typography>
      </Box>
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
    </Container>
  )
}

export default Masthead
