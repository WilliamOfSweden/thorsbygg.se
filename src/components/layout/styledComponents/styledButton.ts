import styled from 'styled-components'

import THEME from '../../../styles/theme'

const StyledButton = styled.button`
  background: red;
  border: none;
  border-radius: ${THEME.shapes.borderRadius};
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
    max-width: 300px;
  }
`

export default StyledButton
