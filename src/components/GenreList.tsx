import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error)
        return null;
    
    if (isLoading) 
        return <CircularProgress />;

    return (
        <Stack spacing={2} >  
            {isLoading && <p>Loading...</p>}
            {data.map(genre => (
                <Stack direction="row" spacing={2} key={genre.id} >
                    <img
                        src={getCroppedImageUrl(genre.image_background)}
                        loading="lazy"
                        width='32px'
                        height={32}
                        style={{borderRadius: 5}}
                    />
                    <Button 
                        variant="text" 
                        size="large" 
                        sx={{justifyContent: 'flex-start'}}
                        onClick={() => onSelectGenre(genre) }>
                        {genre.name}
                    </Button>
                </Stack>
            ))}
        </Stack>
    );
}

export default GenreList;
