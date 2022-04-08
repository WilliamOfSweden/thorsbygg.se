import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { StyledSection } from './styledSection'
import { ContactForm } from './contactForm'

export const ContactSection = () => (
  <StyledSection id='contact'>
    <div>
      <StaticImage
        alt='A black headset on a table infront of miniature wooden houses.'
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        loading='eager'
        placeholder='none'
        src='../../../images/contact.jpeg'
      />
    </div>
    <div>
      <div>
        <h2>Kontakta oss</h2>
        <ContactForm />
      </div>
    </div>
  </StyledSection>
)
