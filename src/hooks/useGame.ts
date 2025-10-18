import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => {
    return useQuery<Game, Error>({
        queryKey: ["gameDetails", slug],
        queryFn: () => apiClient.getGame(slug),
        staleTime: 24 * 60 * 60 * 1000 // 24 hours
    });
};

export default useGame;