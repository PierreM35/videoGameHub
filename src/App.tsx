import './App.css'
import {
    CssBaseline,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
    useColorScheme
} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {ThemeProvider} from "@emotion/react";
import darkTheme from "./theme.ts";

function App() {
    const { mode, setMode } = useColorScheme();

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <NavBar/>
                </Grid>
                <Grid size={6}>
                    <Typography>item 1</Typography>
                </Grid>
                <Grid size={6}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-theme-toggle"
                            name="theme-toggle"
                            row
                            value={mode}
                            onChange={(event) =>
                                setMode(event.target.value as 'system' | 'light' | 'dark')
                        }
                        >
                            <FormControlLabel value="system" control={<Radio />} label="System" />
                            <FormControlLabel value="light" control={<Radio />} label="Light" />
                            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
