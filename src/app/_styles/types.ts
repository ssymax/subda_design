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
