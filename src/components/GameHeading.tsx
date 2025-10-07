import Typography from "@mui/joy/Typography";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

    const { data: genres } = useGenres();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId);

    const { data: platforms } = usePlatforms();
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

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