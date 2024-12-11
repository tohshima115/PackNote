// theme.ts
import { createTheme } from '@shopify/restyle'

const palette = {
  white: '#fafafa',
  black: '#131313',
  darkestGrey: '#424242',
  darkGray: '#757575',
  lightGray: '#BDBDBD',
  lightestGray: '#EEEEEE',
  blue: '#7e8cf2',
  // 他の色を追加
}

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    primary: palette.blue,
    text: palette.darkestGrey,
    secondaryText: palette.darkGray,
    tertiaryText: palette.lightGray,
    border: palette.lightestGray,
    // 他の色を追加
  },
  spacing: {
    0: 4,
    1: 8,
    2: 16,
    3: 24,
    5: 40,
    8: 64,
    13: 104,
    // 他のスペーシングを追加
  },
  textVariants: {
    Mh1: {
        fontSize: 64,
        fontWeight: '400',
        lineHeight: 104,
    },    
    Mh2: {
        fontSize: 42.667,
        fontWeight: '400',
        lineHeight: 64,
      },    
    Mh3: {
        fontSize: 32,
        fontWeight: '400',
        lineHeight: 64,
      },    
    Mh4: {
        fontSize: 25.6,
        fontWeight: '400',
        lineHeight: 40,
      },    
    Mh5: {
        fontSize: 21.333,
        fontWeight: '400',
        lineHeight: 40,
      },    
    Mh6: {
        fontSize: 18.286,
        fontWeight: '400',
        lineHeight: 40,
      },
    Mb: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },    
    Ms1: {
        fontSize: 14.222,
        fontWeight: '400',
        lineHeight: 24,
      },    
    Ms2: {
        fontSize: 12.8,
        fontWeight: '400',
        lineHeight: 24,
      },
    Bh1: {
        fontSize: 64,
        fontWeight: '700',
        lineHeight: 104,
    },    
    Bh2: {
        fontSize: 42.667,
        fontWeight: '700',
        lineHeight: 64,
      },    
    Bh3: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 64,
      },    
    Bh4: {
        fontSize: 25.6,
        fontWeight: '700',
        lineHeight: 40,
      },    
    Bh5: {
        fontSize: 21.333,
        fontWeight: '700',
        lineHeight: 40,
      },    
    Bh6: {
        fontSize: 18.286,
        fontWeight: '700',
        lineHeight: 40,
      },
    Bb: {
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 24,
    },    
    Bs1: {
        fontSize: 14.222,
        fontWeight: '700',
        lineHeight: 24,
      },    
    Bs2: {
        fontSize: 12.8,
        fontWeight: '700',
        lineHeight: 24,
      },
    // 他のテキストバリアントを追加
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
})

export const darkTheme: Theme = {
    ...theme,
    colors: {
      ...theme.colors,
      mainBackground: palette.black,
      text: palette.lightestGray,
      secondaryText: palette.lightGray,
      tertiaryText: palette.darkGray,
      border: palette.darkestGrey,
    },
  };

export type Theme = typeof theme;