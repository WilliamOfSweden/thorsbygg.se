import React, { Fragment, ReactNode } from 'react'
import { GlobalStyles } from '../../styles/globalStyles'

import { StyledMain } from './StyledMain'
import { MainFooter } from './mainFooter/'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <Fragment>
    <GlobalStyles />
    <StyledMain>{children}</StyledMain>
    <MainFooter />
  </Fragment>
)
