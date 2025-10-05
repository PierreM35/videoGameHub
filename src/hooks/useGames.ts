import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { Platform } from "./usePlatforms";
import APIClient, { type FectchResponse } from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery<FectchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () => 
            apiClient
                .getAll({
                    params: { 
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchedText
                    }
                }),
    });

export default useGames;