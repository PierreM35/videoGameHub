import { Button, Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { 
        data, 
        error,
        isLoading, 
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage, 
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (error) return <p>{error?.message}</p>;

    return (
        <>
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
                    {data?.pages.map((page, index) =>
                        <React.Fragment key={index}>
                            {page.results.map((game) => (     
                                <GameCardContainer key={game.id} >
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    )}
            </Stack>
            {hasNextPage && (
                <Button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )}

        </>
    );
};

export default GameGrid;