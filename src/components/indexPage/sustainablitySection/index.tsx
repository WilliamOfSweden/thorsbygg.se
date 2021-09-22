import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      display: `block`,
      margin: `2rem auto`,
    },
    container: {
      maxWidth: `800px`,
      paddingBottom: theme.spacing(5),

      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(8),
      },
    },
  })
)

const SustainabilitySection: FC = () => {
  const {
    file: { childrenMarkdownRemark },
  } = useStaticQuery(
    graphql`
      query IndexPageSustainabiltySectiondQuery {
        file(
          absolutePath: { regex: "/content/indexPage/sustainablitySection/" }
        ) {
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
    <Container className={classes.container} component='section'>
      <StaticImage
        src='../../../images/sustainability.jpeg'
        alt='Flowers layed on white background, i a heart shape.'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <Typography align='center' color='primary' paragraph variant='h2'>
        {title}
      </Typography>
      <Typography align='center'>{content}</Typography>
      <Button
        color='primary'
        variant='contained'
        size='large'
        className={classes.btn}
      >
        Kvalitets- &amp; Miljöpolicy
      </Button>
    </Container>
  )
}

export default SustainabilitySection
