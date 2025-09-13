import './App.css'
import {
    CssBaseline,
    Grid,
    Typography,
} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    const darkTheme = createTheme({
      palette: {
        mode: toggleDarkMode ? 'dark' : 'light',
      },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <NavBar onModeSwitch={toggleDarkTheme}/>
                </Grid>
                <Grid size={6}>
                    <Typography>item 1</Typography>
                </Grid>
                <Grid size={6}>
                    <Typography>item 2</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
