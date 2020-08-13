interface palettePattern {
  dark: string,
  main: string,
  light: string
}

export interface paletteType {
  grey: palettePattern,
  primary: palettePattern,
  secondary: palettePattern
}

export const palette: paletteType = {
  grey: {
    dark: '#444',
    main: '#4c4c4c',
    light: '#777'
  },
  primary: {
    dark: '#0086b4',
    main: '#41B6E6',
    light: '#a2dbf3'
  },
  secondary: {
    dark: '#c88513',
    main: '#FFB549',
    light: '#FFCA7C'
  }
}