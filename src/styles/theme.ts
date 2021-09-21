import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PALETTE = {
  bg: '#fefefe',
  bgAlt: `#e2e8f7`,
  primary: `#3f76a3`,
  textColor: `#555`,
}

const FONTS = {
  headings: 'montserrat',
  body: 'raleway',
  subTitle: 'Nothing You Could Do',
}

const theme = responsiveFontSizes(
  createTheme({
    overrides: {
      MuiButton: {
        sizeLarge: {
          letterSpacing: `2px`,
          padding: `12px 50px`,
        },
      },
      MuiCssBaseline: {
        '@global': {
          body: {
            overflowY: `scroll`,
            overflowX: `hidden`,
          },

          '#gatsby-focus-wrapper': {
            overflowX: `hidden`,
          },
        },
      },
      MuiTypography: {
        gutterBottom: {
          marginBottom: `1rem`,
        },

        body1: {
          fontFamily: FONTS.body,
          fontSize: 20,
        },

        h1: {
          letterSpacing: `2px`,
          fontFamily: FONTS.headings,
          fontWeight: 900,
        },

        h2: {
          letterSpacing: `2px`,
          fontFamily: FONTS.headings,
          fontWeight: 800,
        },
        h3: {
          letterSpacing: `2px`,
          fontFamily: FONTS.headings,
          fontWeight: 700,
        },
        subtitle1: {
          fontFamily: FONTS.subTitle,
          fontSize: `calc(1rem + 2vw)`,
        },
      },
    },
    palette: {
      background: {
        default: PALETTE.bg,
      },

      primary: {
        main: PALETTE.primary,
      },

      text: {
        primary: PALETTE.textColor,
      },

      // secondary: {
      //   main: PALETTE.secondary,
      // },
    },
  })
)

export default theme
