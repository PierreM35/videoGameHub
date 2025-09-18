import { Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <p>{error}</p>}
            <Stack 
                direction="row" 
                spacing={2} 
                useFlexGap
                sx={{ flexWrap: 'wrap' }}>
                    {isLoading && skeletons.map(skeleton => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                    {games.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
            </Stack>
        </>
    );
};

export default GameGrid;