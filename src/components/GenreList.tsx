import { CircularProgress, Link, Stack, Typography } from "@mui/material";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

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
                {data.map(genre => (
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
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            sx={{cursor: 'pointer'}}
                            onClick={() => onSelectGenre(genre) }>
                            {genre.name}
                        </Link>
                    </Stack>
                ))}
            </Stack>
        </>
    );
}

export default GenreList;
