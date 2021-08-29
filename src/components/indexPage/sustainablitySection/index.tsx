import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() =>
  createStyles({
    btn: {
      display: `block`,
      margin: `2rem auto`,
    },
    container: {
      maxWidth: `800px`,
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
      <Typography align='center' color='primary' component='h2' variant='h3'>
        {childrenMarkdownRemark[0].frontmatter.title}
      </Typography>
      <Typography align='center'>
        {childrenMarkdownRemark[0].internal.content}
      </Typography>
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
