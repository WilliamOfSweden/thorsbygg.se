import styled from 'styled-components'

import { THEME } from '../../styles/theme'

interface Props {
  fullWidth?: boolean
}

export const StyledButton = styled.button<Props>`
  background: ${THEME.palette.primary};
  border: none;
  border-radius: ${THEME.shapes.borderRadius};
  color: ${THEME.palette.textInverse};
  cursor: pointer;
  display: block;
  font-weight: 700;
  letter-spacing: 2px;
  margin-inline: auto;
  padding: 1rem 4rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background: ${THEME.palette.primary}ee;
  }

  @media (min-width: ${THEME.breakpoints.sm}) {
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  }
`
