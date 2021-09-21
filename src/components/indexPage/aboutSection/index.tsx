import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
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
    textWrapper: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: 'center',
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
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

  const classes = useStyles()

  return (
    <Container className={classes.aboutSection} disableGutters maxWidth='xl'>
      <Grid container>
        <Grid item xs={12} md={6}>
          {' '}
          <StaticImage
            src='../../../images/about.jpeg'
            alt='Flowers layed on white background, i a heart shape.'
            loading='eager'
            formats={['auto', 'webp', 'avif']}
            placeholder='none'
            layout='fullWidth'
          />
        </Grid>
        <Grid className={classes.textWrapper} item xs={12} md={6}>
          <Typography color='primary' variant='h2'>
            {childrenMarkdownRemark[0].frontmatter.title}
          </Typography>
          <Typography>{childrenMarkdownRemark[0].internal.content}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutSection
