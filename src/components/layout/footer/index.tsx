import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { PALETTE } from '../../../styles/theme'
import { Typography } from '@material-ui/core'

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
            <span style={{ textDecoration: 'underline' }}>William Daghouz</span>
            .
          </Typography>
        </a>
      </Container>
    </footer>
  )
}

export default Footer
