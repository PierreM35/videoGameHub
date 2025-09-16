import { List, ListItem, Stack, Typography } from "@mui/material";
import useGames, { type Game } from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
    const { games, error } = useGames();
    let myGame=games.slice(0,4);

    return (
        <>
            {error && <p>{error}</p>}
            <Stack 
                direction="row" 
                spacing={2} 
                useFlexGap
                sx={{ flexWrap: 'wrap' }}>
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </Stack>
        </>
    );
};

export default GameGrid;