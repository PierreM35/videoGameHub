import './App.css'
import { Box, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GameGrid from './components/GameGrid.tsx';
import GenreList from './components/GenreList.tsx';
import type { Genre } from './hooks/useGenres.ts';

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    const myTheme = createTheme({
      palette: {
        mode: toggleDarkMode ? 'dark' : 'light',
      }
    });

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <Box 
                sx={{ 
                    display: 'grid',
                    gap: 2,
                    gridTemplateRows: 'auto',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateAreas: `"nav nav nav nav nav" "aside main main main main"`,
                }}
            >
                <Box sx={{ gridArea:'nav' }}  >
                    <NavBar onModeSwitch={toggleDarkTheme}/>
                </Box>
                <Box sx={{ gridArea:'aside' }}  >
                    <GenreList onSelectGenre={(genre) => setSelectedGenre(genre) } selectedGenre={selectedGenre} />
                </Box>
                <Box sx={{ gridArea:'main' }} >
                    <GameGrid selectedGenre={selectedGenre} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App;
