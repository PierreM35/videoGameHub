import useGenres from "./useGenres";

const useGenre = (id?: Number) => {
    const { data: genres } = useGenres();
    return genres?.results.find(g => g.id === id);
}

export default useGenre;