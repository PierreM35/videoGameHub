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
import SortSelector from './components/SortSelector.tsx';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                    <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre}) } selectedGenre={gameQuery.genre} />
                </Box>setGameQuery
                <Box sx={{ gridArea:'main' }} >
                    <Stack>
                        <Stack direction='row' gap={2} >
                            <PlatformsDropdown onSelectPlatform={( platform ) => setGameQuery({...gameQuery, platform}) }/>
                            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                        </Stack>
                        <GameGrid gameQuery={gameQuery} />
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App;
