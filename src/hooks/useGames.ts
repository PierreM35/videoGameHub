import type { GameQuery } from "../App";
import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genre: Genre;
}

const useGames = (gameQuery: GameQuery) => useData<Game>(
    '/games', 
    {
        params: 
        { 
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id
        }
    }, 
    [gameQuery]);

export default useGames;