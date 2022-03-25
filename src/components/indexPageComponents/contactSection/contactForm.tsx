import React from 'react'

import { StyledForm } from './styledForm'
import { StyledButton } from '../../shared/'

export const ContactForm = () => (
  <StyledForm
    autoComplete='on'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
    id='contact-form'
    encType='application/x-www-form-urlencoded'
    method='POST'
    name='contact-form'
  >
    <input type='hidden' name='form-name' value='contact-form' />
    <p hidden>
      <label>
        <input name='bot-field' />
      </label>
    </p>
    <div>
      <label htmlFor='name'>Name *</label>
      <input
        araia-invalid={false}
        autoComplete=''
        id='name'
        name='name'
        required
      />
    </div>
    <div>
      <label htmlFor='email'>E-post *</label>
      <input
        araia-invalid={false}
        id='email'
        name='email'
        required
        type='email'
      />
    </div>
    <div>
      <label htmlFor='organization'>Företag / Organisation</label>
      <input
        araia-invalid={false}
        id='organization'
        name='organization'
        type='text'
      />
    </div>
    <div>
      <label htmlFor='message'>Meddelande</label>
      <textarea id='message' name='message' required />
    </div>
    <StyledButton fullWidth name='send' type='submit'>
      Skicka
    </StyledButton>
  </StyledForm>
)
