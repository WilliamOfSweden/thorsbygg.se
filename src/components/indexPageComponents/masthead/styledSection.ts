import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledSection = styled.section`
  & > div:first-child {
    padding-left: ${THEME.spacing(2)};
    padding-right: ${THEME.spacing(2)};
    padding-top: ${THEME.spacing(10)};
  }

  & > div > p {
    text-align: center;
    font-family: ${THEME.fonts.subHeading};
    font-size: 2rem;

    @media (min-width: ${THEME.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
`
