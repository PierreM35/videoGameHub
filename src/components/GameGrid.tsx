import { Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
    const { data, error, isLoading } = useGames();
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
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardContainer>
                    ))}
                    {data.map(game => (
                        <GameCardContainer>
                            <GameCard key={game.id} game={game} />
                        </GameCardContainer>
                    ))}
            </Stack>
        </>
    );
};

export default GameGrid;