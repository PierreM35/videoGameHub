import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface FectchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FectchGamesResponse>('/games')
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError('Failed to fetch games');
            });

        return () => controller.abort();
    }, []);

    return { games, error };
}

export default useGames;