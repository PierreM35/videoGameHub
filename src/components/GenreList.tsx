import { CircularProgress, Link, Stack, Typography } from "@mui/material";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stateManagement/store";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

    if (error)
        return null;
    
    if (isLoading) 
        return <CircularProgress />;

    return (
        <>
            <Typography 
                variant="h6" 
                marginTop={2} 
                marginBottom={2} 
                textAlign="left" 
                fontWeight="bold">
                Genres
            </Typography>
            <Stack spacing={2} >  
                {isLoading && <p>Loading...</p>}
                {data?.results.map(genre => (
                    <Stack direction="row" spacing={2} key={genre.id} >
                        <img
                            src={getCroppedImageUrl(genre.image_background)}
                            loading="lazy"
                            width='32px'
                            height={32}
                            object-fit="cover"
                            style={{borderRadius: 5}}
                        />
                        <Link 
                            fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                            sx={{cursor: 'pointer'}}
                            onClick={() => setSelectedGenreId(genre.id) }>
                            {genre.name}
                        </Link>
                    </Stack>
                ))}
            </Stack>
        </>
    );
}

export default GenreList;
