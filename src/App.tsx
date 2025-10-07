import './App.css'
import { Box, CssBaseline, Stack } from "@mui/material";
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GameGrid from './components/GameGrid.tsx';
import GenreList from './components/GenreList.tsx';
import PlatformsDropdown from './components/PlatformsDropdown.tsx';
import SortSelector from './components/SortSelector.tsx';
import GameHeading from './components/GameHeading.tsx';

export interface GameQuery {
    genreId?: Number;
    platformId?: Number;
    sortOrder: string;
    searchedText: string;
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
                    <NavBar
                        onModeSwitch={toggleDarkTheme} 
                        onSearch={(searchedText) => setGameQuery({...gameQuery, searchedText})}/>
                </Box>
                <Box sx={{ gridArea:'aside' }}  >
                    <GenreList 
                        onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id}) } 
                        selectedGenreId={gameQuery.genreId} />
                </Box>setGameQuery
                <Box sx={{ gridArea:'main' }} >
                    <Stack>
                        <GameHeading gameQuery={gameQuery} />
                        <Stack direction='row' gap={2} >
                            <PlatformsDropdown 
                                onSelectPlatform={( platform ) => setGameQuery({...gameQuery, platformId: platform?.id}) }/>
                            <SortSelector 
                                sortOrder={gameQuery.sortOrder} 
                                onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                        </Stack>
                        <GameGrid gameQuery={gameQuery} />
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App;
