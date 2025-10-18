import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { results: genres, count: genres.length, next: null }
});

export default useGenres;