import { createTheme } from '@mui/material';
import { FontBold, FontLight } from '../fonts/fonts';
import { Black, DarkGrey, LightGrey } from '../constants/colors';

export const theme = createTheme({
    typography: {
        h1: {
            fontFamily: FontBold,
            fontSize: '36px',
            color: Black,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
            fontWeight: 'bold',
        },
         h4: {
            fontFamily: FontLight,
            fontSize: '12px',
            color: DarkGrey,
            marginBottom: '10px',
            fontWeight: '300',
        },
        h6: {
            fontFamily: FontLight,
            fontSize: '12px',
            color: LightGrey,
        },
        body1: { // <p> tag
            fontFamily: FontLight,
            fontSize: '16px',
            color: DarkGrey,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
              root: {
                display: 'flex',
                flexDirection: 'column',
                padding: '30px'
              },
            },
          },
    },
})
