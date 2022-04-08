import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledSection = styled.section`
  & > div {
    @media (min-width: ${THEME.breakpoints.md}) {
      align-items: stretch;
      display: flex;

      & > div {
        flex: 1 1 50%;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      &:nth-child(odd) {
        background-color: ${THEME.palette.bgAlt};
      }

      & > div:nth-child(2) {
        align-items: center;
        display: flex;
        justify-content: center;

        & > div {
          max-width: 70ch;

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
