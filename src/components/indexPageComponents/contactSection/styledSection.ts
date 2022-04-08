import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledSection = styled.section`
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
`
