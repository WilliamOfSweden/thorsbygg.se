import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PALETTE = {
  bg: '#fafafa',
  primary: `#3f76a3`,
}

const theme = responsiveFontSizes(
  createTheme({
    overrides: {
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

        h1: {
          color: PALETTE.primary,
          // fontFamily: `poppins`,
          fontWeight: 900,
          marginBottom: `1rem`,
        },
      },
    },
  })
)

export default theme
