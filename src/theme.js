import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: 'rgba(6,88,76,0.95)',
        },
        secondary: {
          main: '#161c3d',
        },
      }
});

export default theme;