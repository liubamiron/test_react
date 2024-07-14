// theme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Определение основной темы
const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
