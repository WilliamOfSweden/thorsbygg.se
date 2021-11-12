import React, { Fragment, ReactNode } from 'react'
import GlobalStyle from '../../styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/muiTheme'

import Footer from './footer'
import { StyledMain } from './styledComponents'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledMain>{children}</StyledMain>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
