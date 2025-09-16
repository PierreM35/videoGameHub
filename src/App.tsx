import './App.css'
import {
    CssBaseline,
    Grid,
    Typography,
} from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GameGrid from './components/GameGrid.tsx';

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    const myTheme = createTheme({
      palette: {
        mode: toggleDarkMode ? 'dark' : 'light',
      },
    });

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <Grid container spacing={2}>
                <Grid size={12}>
                    <NavBar onModeSwitch={toggleDarkTheme}/>
                </Grid>
                <Grid size={6}>
                    <Typography>item 1</Typography>
                </Grid>
                <Grid size={6}>
                    <GameGrid />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App;
