import styled from 'styled-components'

import { THEME } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  background-color: ${THEME.palette.primary};
  color: ${THEME.palette.textInverse};
  padding: ${THEME.spacing(4)} 0;

  a {
    color: ${THEME.palette.textInverse};
    display: block;
    font-size: 1.2rem;
    margin-inline: auto;
    text-align: center;
    width: min(${THEME.breakpoints.sm}, 100% - ${THEME.spacing(4)});

    & > span {
      text-decoration: underline;
    }
  }
`
