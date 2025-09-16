import React, { useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface FectchGamesResponse {
    count: number;
    results: Game[];
}

function GameGrid() {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');

    useEffect(() => {
        apiClient.get<FectchGamesResponse>('/games')
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                setError('Failed to fetch games');
                console.error(error);
            });
    }, []);

    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;