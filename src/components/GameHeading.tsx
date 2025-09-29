import Typography from "@mui/joy/Typography";
import type { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  
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