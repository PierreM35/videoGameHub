import { Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {error && <p>{error}</p>}
            <Stack 
                direction="row" 
                spacing={3} 
                useFlexGap
                sx={{ flexWrap: 'wrap' }}>
                    {isLoading && skeletons.map(skeleton => (
                        <GameCardContainer key={skeleton} >
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                    {data.map(game => (
                        <GameCardContainer key={game.id} >
                            <GameCard game={game} />
                        </GameCardContainer>
                    ))}
            </Stack>
        </>
    );
};

export default GameGrid;