import './App.css'
import { Box, CssBaseline, Stack } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GameGrid from './components/GameGrid.tsx';
import GenreList from './components/GenreList.tsx';
import type { Genre } from './hooks/useGenres.ts';
import PlatformsDropdown from './components/PlatformsDropdown.tsx';
import type { Platform } from './hooks/usePlatforms.ts';

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
                    <Stack>
                        <PlatformsDropdown onSelectPlatform={( platform ) => setSelectedPlatform(platform) }/>
                        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App;
