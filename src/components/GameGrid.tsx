import { Button, CircularProgress, Stack } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { 
        data, 
        error,
        isLoading, 
        fetchNextPage,
        hasNextPage, 
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (error) return <p>{error?.message}</p>;

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={hasNextPage || false}
            loader={<CircularProgress />}
            >
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
        </InfiniteScroll>
    );
};

export default GameGrid;