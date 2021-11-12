import React, { Fragment, ReactNode } from 'react'
import GlobalStyle from '../../styles/globalStyles'
import Footer from './footer'

import { StyledMain } from './styledComponents'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Fragment>
    <GlobalStyle />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Fragment>
)

export default Layout
