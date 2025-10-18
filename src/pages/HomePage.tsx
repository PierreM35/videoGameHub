import { Box, Stack } from "@mui/material";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformsDropdown from "../components/PlatformsDropdown";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
    return (
        <Box 
            sx={{ 
                display: 'grid',
                gap: 2,
                gridTemplateRows: 'auto',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateAreas: `"aside main main main main"`,
            }}
        >
            <Box sx={{ gridArea:'aside' }}  >
                <GenreList />
            </Box>
            <Box sx={{ gridArea:'main' }} >
                <Stack>
                    <GameHeading />
                    <Stack direction='row' gap={2} >
                        <PlatformsDropdown />
                        <SortSelector />
                    </Stack>
                    <GameGrid />
                </Stack>
            </Box>
        </Box>
    )
}   

export default HomePage;