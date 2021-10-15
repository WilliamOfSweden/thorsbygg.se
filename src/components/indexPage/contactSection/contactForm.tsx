import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginTop: theme.spacing(1),
      [theme.breakpoints.up('xl')]: {
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    textField: {
      display: `flex`,
      marginBottom: theme.spacing(2),
    },
    textArea: {
      display: `flex`,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4),
    },
  })
)

const ContactForm = () => {
  const classes = useStyles()

  return (
    <form
      name='contact-form'
      method='POST'
      encType='application/x-www-form-urlencoded'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      id='contact-form'
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <p hidden>
        <label>
          <input name='bot-field' />
        </label>
      </p>
      <TextField
        autoComplete='name'
        className={classes.textField}
        color='primary'
        id='name'
        label='Namn'
        name='name'
        required
        type='text'
      />
      <TextField
        autoComplete='email'
        className={classes.textField}
        color='primary'
        id='email'
        label='E-post'
        name='email'
        required
        type='email'
      />
      <TextField
        autoComplete='organization'
        className={classes.textField}
        color='primary'
        id='organization'
        label='Företag / Organisation'
        name='organization'
        type='organization'
      />
      <TextField
        className={classes.textArea}
        color='primary'
        id='outlined-textarea'
        label='Meddelande'
        name='message'
        multiline
        required
        rows={6}
      />
      <Button
        className={classes.btn}
        color='primary'
        fullWidth
        size='large'
        type='submit'
        variant='contained'
      >
        Skicka
      </Button>
    </form>
  )
}

export default ContactForm
