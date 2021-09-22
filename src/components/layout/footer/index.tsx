import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { PALETTE } from '../../../styles/theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: PALETTE.primary,
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    developerLink: {
      color: `#fff`,
    },
  })
)

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.container} component='footer' maxWidth='xl'>
        <a
          aria-label='Link to developers website.'
          href='https://daghouz.com'
          rel='noreferrer noopener'
          target='_blank'
        >
          <Typography className={classes.developerLink} align='center'>
            Website developed by{' '}
            <span style={{ textDecoration: 'underline' }}>{author}</span>.
          </Typography>
        </a>
      </Container>
    </footer>
  )
}

export default Footer
