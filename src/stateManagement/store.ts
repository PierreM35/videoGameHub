import { create } from "zustand";

interface GameQuery {
    genreId?: Number;
    platformId?: Number;
    sortOrder?: string;
    searchedText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (text: string) => void;
    setGenreId: (id?: Number) => void;
    setPlatformId: (id?: Number) => void;
    setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchedText: string) => set(() => ({gameQuery: { searchedText }})),
    setGenreId: (genreId?: Number) => set((store) => ({gameQuery: { ...store.gameQuery, genreId }})),
    setPlatformId: (platformId?: Number) => set((store) => ({gameQuery: { ...store.gameQuery, platformId }})),
    setSortOrder: (sortOrder: string) => set((store) => ({gameQuery: { ...store.gameQuery, sortOrder }})),
}));

export default useGameQueryStore;
