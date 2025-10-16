import Typography from "@mui/joy/Typography";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stateManagement/store";

const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const genre = useGenre(genreId);
    
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const platform = usePlatform(platformId);
    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  
    return (
        <Typography 
            level="h4" 
            textAlign="left" 
            sx={{mb: 2, mt: 2, fontWeight: 'bold'}}>
            {heading}
        </Typography>
    );
}

export default GameHeading;