import { DefaultTheme } from 'styled-components';
import { Breakpoints, MediaQuery } from './types';

export const breakpoints: Breakpoints = {
  xxl: '1536',
  xl: '1280',
  lg: '1024',
  md: '768',
  sm: '640',
};

export const colors = {
  primary: '#000',
  secondary: '#fff',
  beige: '#fcf8f8',
  grey: '#666',
  mobile: '#EAC696',
  dark: '#1b1b1b',
};

export const maxWidth = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  // @ts-expect-error @ts-ignore
  acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {} as MediaQuery);

export const minWidth = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  // @ts-expect-error @ts-ignore
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {} as MediaQuery);

export const theme: DefaultTheme = {
  colors,
  maxWidth,
  minWidth,
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
