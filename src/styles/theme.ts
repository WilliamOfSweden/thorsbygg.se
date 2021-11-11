const THEME = {
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  fonts: {
    heading: 'montserrat',
    body: 'raleway',
    subHeading: 'Nothing You Could Do',
  },
  palette: {
    bg: '#fefefe',
    bgAlt: '#e2e8f7',
    primary: '#2a4e6c',
    textColor: '#555555',
    textInverse: '#ffffff',
  },
  shapes: {
    borderRadius: '4px',
  },
  spacing(space: number) {
    return `${space * 8}px`
  },
}

export default THEME
