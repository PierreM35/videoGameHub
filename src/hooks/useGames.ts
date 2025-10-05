import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import apiClient, { type FectchResponse } from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FectchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => 
            apiClient
                .get<FectchResponse<Game>>('/games', {
                    params:  { 
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchedText
                    },
                })
                .then(res => res.data)
    });

export default useGames;