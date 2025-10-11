import Typography from "@mui/joy/Typography";
import type { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);
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