import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  background-color: ${THEME.palette.primary};
  color: ${THEME.palette.textInverse};
  padding: ${THEME.spacing(4)} 0;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-inline: auto;
    width: min(${THEME.breakpoints.xl}, 100% - ${THEME.spacing(4)});

    a {
      color: ${THEME.palette.textInverse};
      font-size: 1.2rem;
    }
  }
`
