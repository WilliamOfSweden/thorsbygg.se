import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PALETTE = {
  bg: '#fafafa',
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
    },
  })
)

export default theme
