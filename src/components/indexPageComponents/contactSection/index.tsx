import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { StyledContactSection } from '../../layout/styledComponents'
import ContactForm from './contactForm'

export const ContactSection = () => (
  <StyledContactSection id='contact'>
    <div>
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
    </div>
  </StyledContactSection>
)
