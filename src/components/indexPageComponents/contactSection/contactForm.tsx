import React from 'react'
import styled from 'styled-components'

import { THEME } from '../../../styles/theme'
import { StyledButton } from '../../shared'

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: ${THEME.spacing(2)};
    width: 100%;

    input,
    textarea {
      background-color: #e8eaef;
      border: none;
      border-radius: var(--shape-radius-sm);
      color: #000;
      height: 40px;
      padding: var(--space-md);
    }

    textarea {
      height: 100px;
      resize: none;
    }

    input:focus,
    textarea:focus {
      outline: 2px solid var(--color-primary);
    }
  }
`

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
