import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { StaticImage } from 'gatsby-plugin-image'

import ContactForm from './contactForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopOnly: {
      display: 'none',

      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    img: {
      height: `100%`,
    },
    gridItem: {
      display: `flex`,
      flexDirection: `column`,
      justifyContent: 'center',
      paddingBottom: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(8),

      '&:nth-last-child(1)': {
        paddingBottom: theme.spacing(2),
      },

      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(8),
      },
    },
  })
)

const ServicesSection = () => {
  const classes = useStyles()

  return (
    <section>
      <Grid container alignItems='stretch'>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <Typography color='primary' variant='h2' gutterBottom>
            Kontakta oss
          </Typography>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6} className={classes.desktopOnly}>
          <StaticImage
            alt='A black headset on a table infront of miniature wooden houses.'
            formats={['auto', 'webp', 'avif']}
            layout='fullWidth'
            loading='eager'
            className={classes.img}
            placeholder='none'
            src='../../../images/contact.jpeg'
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default ServicesSection
