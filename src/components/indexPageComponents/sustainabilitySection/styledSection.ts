import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledSection = styled.section`
  margin-inline: auto;
  padding-bottom: ${THEME.spacing(8)};
  width: min(700px, 100% - ${THEME.spacing(4)});

  @media screen and (min-width: 700px) {
    h2,
    p {
      text-align: center;
    }
  }
`
