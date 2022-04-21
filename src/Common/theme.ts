import { 
    createTheme,
    Theme
} from '@mui/material/styles';
import {
    deepOrange,
    blue
} from '@mui/material/colors';

import { PaletteMode } from '@mui/material'

export const makeTheme = (mode: PaletteMode): Theme => {
    let darkMode = mode;
    if(!darkMode)
        darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
            "dark" : "light";

    const theme = createTheme({
        palette: {
            mode: darkMode,
            primary: blue,
            secondary: deepOrange
        }
    });
    return createTheme(theme, {
        typography: {
            h3: {
                textAlign: "center",
                [theme.breakpoints.down('sm')]: {
                    fontSize: '2.4rem'
                }
            }
        }
    });
}
