import 'styled-components';

export type Breakpoints = {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
};

export type MediaQuery = {
  [Key in keyof Breakpoints]: string;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: MediaQuery;
    minWidth: MediaQuery;
    colors: {
      primary: string;
      secondary: string;
      beige: string;
      grey: string;
      dark: string;
    };
    zIndex: {
      level1: '1000';
      level2: '2000';
      level3: '3000';
      level4: '4000';
      level5: '5000';
      level6: '6000';
      level7: '7000';
      level8: '8000';
      level9: '9000';
      level10: '10000';
    };
  }
}
