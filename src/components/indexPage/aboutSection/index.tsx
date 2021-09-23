import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PALETTE } from '../../../styles/theme'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutSection: {
      background: PALETTE.bgAlt,
    },
    img: {
      display: 'block',
      height: '100%',
    },
    textWrapper: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: 'center',
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),

      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(8),
      },
    },
  })
)

const AboutSection: FC = () => {
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

  const classes = useStyles()

  return (
    <Container className={classes.aboutSection} disableGutters maxWidth='xl'>
      <Grid container>
        <Grid item xs={12} md={6}>
          <StaticImage
            alt='A contstruction worker pointing with a couple.'
            formats={['auto', 'webp', 'avif']}
            layout='fullWidth'
            loading='eager'
            className={classes.img}
            placeholder='none'
            src='../../../images/about.jpeg'
          />
        </Grid>
        <Grid className={classes.textWrapper} item xs={12} md={6}>
          <Typography color='primary' paragraph variant='h2'>
            {title}
          </Typography>
          <Typography>{content}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutSection
