import { Grid, Typography } from "@mui/material"
import type { Game } from "../entities/Game";
import DefintionItem from "./DefintionItem";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameAttributes = ({ game }: Props) => {
    const gridSize = 6;

    return (
        <Grid container spacing={2} marginTop='20px'>
            <Grid size={gridSize}>
                <DefintionItem term="Platforms" >
                    { game.parent_platforms.map(({platform}) =>  
                        <Typography key={platform.id}>
                            { platform.name }
                        </Typography>
                    )}
                </DefintionItem>
            </Grid>
            <Grid size={gridSize}>
                <DefintionItem term="Metascores" >
                    <CriticScore score={game.metacritic} />
                </DefintionItem>
            </Grid>
            <Grid size={gridSize}>
                <DefintionItem term="Genres" >
                    { game.genres.map((genre) =>  
                        <Typography key={genre.id}>
                            { genre.name }
                        </Typography>
                    )}
                </DefintionItem>
            </Grid>
            <Grid size={gridSize}>
                <DefintionItem term="Publishers" >
                    { game.publishers?.map((publisher) =>  
                        <Typography key={publisher.id}>
                            { publisher.name }
                        </Typography>
                    )}
                </DefintionItem>
            </Grid>
        </Grid>
    )
}

export default GameAttributes