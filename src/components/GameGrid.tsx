import { Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            {error && <p>{error}</p>}
            <Stack 
                direction="row" 
                spacing={2} 
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