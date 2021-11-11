import React, { Fragment, ReactNode } from 'react'
import GlobalStyle from '../../styles/globalStyles'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/muiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'

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
        <CssBaseline />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout
