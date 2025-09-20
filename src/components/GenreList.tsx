import { Stack, Typography } from "@mui/material";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
    const { data, error, isLoading } = useGenres();

    return (
        <>
            {error && <p>{error}</p>}
            <Stack spacing={2} >  
                {isLoading && <p>Loading...</p>}
                {data.map(genre => (
                    <Typography>
                        {genre.name}
                    </Typography>
                ))}
            </Stack>
        </>
    );
}

export default GenreList;
