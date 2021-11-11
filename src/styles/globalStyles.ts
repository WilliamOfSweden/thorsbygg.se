import { createGlobalStyle } from 'styled-components'

import THEME from './theme'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: ${THEME.palette.bg};
    overflow-x: hidden;
    overflow-y: scroll;

    #gatsby-focus-wrapper {
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${THEME.palette.primary};
      font-family: ${THEME.fonts.heading};
      letter-spacing: 2px;
      line-height: 1;
    }

    h1 {
      font-weight: 900;
      font-size: 3rem;
      margin-bottom: ${THEME.spacing(2)};
      text-align: center;

      @media (min-width: ${THEME.breakpoints.sm}) {
        font-size: calc(2.1rem + 4.1vw);
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: ${THEME.spacing(2)};

      @media (min-width: ${THEME.breakpoints.sm}) {
        font-size: 4rem;
      }
    }

    p {
      font-size: 1.2rem;
    }
  }
`
