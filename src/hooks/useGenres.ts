import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Genre {
    id: number;
    name: string;
}

interface FectchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FectchGenresResponse>('/genres')
            .then(response => {
                setGenres(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

export default useGenre;