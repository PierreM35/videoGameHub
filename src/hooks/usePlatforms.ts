import { useQuery } from "@tanstack/react-query";
import apiClient, { type FectchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery<FectchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => 
        apiClient
            .get<FectchResponse<Platform>>('/platforms/lists/parents')
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { results: platforms, count: platforms.length }
});

export default usePlatforms;