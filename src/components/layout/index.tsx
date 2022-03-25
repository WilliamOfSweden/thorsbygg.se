import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/globalStyles'

import { THEME } from '../../styles/theme'
import { Footer } from './footer'

const StyledMain = styled.main`
  margin-inline: auto;
  width: min(${THEME.breakpoints.xl}, 100%);
`

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <Fragment>
    <GlobalStyles />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Fragment>
)
