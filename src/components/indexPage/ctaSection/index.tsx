import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginTop: theme.spacing(1),

      [theme.breakpoints.up('sm')]: {
        width: 'inherit',
      },
    },

    text: {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
      },
    },
  })
)

const CTASection: React.FC = () => {
  const {
    file: { childrenMarkdownRemark },
  } = useStaticQuery(
    graphql`
      query IndexPageCtaSectionQuery {
        file(absolutePath: { regex: "/content/indexPage/ctaSection/" }) {
          id
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
    <Container component='section' maxWidth='md'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        pb={4}
        pt={4}
      >
        <Typography
          align='left'
          className={classes.text}
          color='primary'
          paragraph
          variant='h2'
        >
          {title}
        </Typography>
        <Typography align='left' className={classes.text} paragraph>
          {content}
        </Typography>

        <Button
          onClick={() => scrollTo('#contact')}
          className={classes.btn}
          color='primary'
          fullWidth
          size='large'
          variant='contained'
        >
          Kontakta oss
        </Button>
      </Box>
    </Container>
  )
}

export default CTASection
