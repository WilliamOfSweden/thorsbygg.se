import styled from 'styled-components'

import THEME from '../../../styles/theme'

const StyledCtaSection = styled.section`
  margin-inline: auto;
  padding-bottom: ${THEME.spacing(8)};
  padding-top: ${THEME.spacing(8)};
  width: min(${THEME.breakpoints.sm}, 100% - ${THEME.spacing(4)});

  h2 {
    @media (min-width: ${THEME.breakpoints.sm}) {
      text-align: center;
    }
  }

  p {
    margin-bottom: ${THEME.spacing(2)};
  }
`

export default StyledCtaSection
