import React, { FC, Fragment } from 'react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return <Fragment>{children}</Fragment>
}

export default Layout
