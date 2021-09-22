import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@material-ui/core/Typography'
import { FONTS } from '../../../styles/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: `none`,
      [theme.breakpoints.up('sm')]: {
        display: `block`,
      },
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

const Masthead: FC = () => {
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
    <Box component='section' pt={12}>
      <Typography color='primary' variant='h1' align='center'>
        {title}
      </Typography>
      <Typography align='center' className={classes.subHeading}>
        {content}
      </Typography>
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
