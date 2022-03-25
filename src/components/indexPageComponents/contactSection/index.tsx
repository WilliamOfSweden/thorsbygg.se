import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { THEME } from '../../../styles/theme'
import { ContactForm } from './contactForm'

const StyledSection = styled.section`
  & > div {
    @media (min-width: ${THEME.breakpoints.md}) {
      align-items: stretch;
      display: flex;
      flex-direction: row-reverse;

      & > div {
        flex: 1 1 50%;
      }

      & > div:nth-child(2) {
        align-items: center;
        display: flex;
        justify-content: center;

        & > div {
          max-width: 70ch;
          width: 100%;

          & > h2 {
            font-size: 3rem;
          }
        }
      }
    }

    & > div:first-child > div {
      height: 100%;
    }

    & > div:nth-child(2) {
      padding: ${THEME.spacing(4)} ${THEME.spacing(2)};
    }
  }
`

export const ContactSection = () => (
  <StyledSection id='contact'>
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
  </StyledSection>
)
