import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FectchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FectchGamesResponse>('/games')
            .then(response => {
                setGames(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError('Failed to fetch games');
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading };
}

export default useGames;