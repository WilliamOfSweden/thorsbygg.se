import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// import Button from 'react-bootstrap/Button'
// import scrollTo from 'gatsby-plugin-smoothscroll'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginTop: theme.spacing(2),
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

  const title = childrenMarkdownRemark[0].frontmatter.title

  const content = childrenMarkdownRemark[0].internal.content

  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        pb={10}
        pt={10}
      >
        <Typography align='center' color='primary' paragraph variant='h2'>
          {title}
        </Typography>
        <Typography align='center' paragraph>
          {content}
        </Typography>

        <Button
          // onClick={() => scrollTo('#contact')}
          className={classes.btn}
          color='primary'
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
