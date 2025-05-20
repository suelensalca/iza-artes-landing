'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 30,
  },
  palette: {
    primary: {
      dark: '#11608e',
      main: '#0081a7',
      light: '#00afb9',
    },
    secondary: {
      dark: '#c24b59',
      main: '#f07167',
      light: '#fed9b7',
    },
    common: {
      white: '#F8F8F8',
      black: '#2E383F',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          margin: '0',
        },
        body: {
          backgroundColor: '#F2F2F2',
          height: '100%',
          fontSize: '16px',
          margin: '0',
        },
      },
    },
  },
});

export default theme;
