import { CircularProgress, Stack, Typography } from "@mui/material";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
                    <Typography fontSize={16}>
                        {genre.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
}

export default GenreList;
