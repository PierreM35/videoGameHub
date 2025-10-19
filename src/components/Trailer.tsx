import { Box, CircularProgress } from "@mui/material";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const Trailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailers(gameId);
    const firstTrailer = data?.results[0];

    if (isLoading) return <CircularProgress/>;

    if (error) throw error;
    
    return firstTrailer ? (
        <Box marginTop={5}>
            <video 
                width='100%'
                src={firstTrailer.data[480]}
                poster={firstTrailer.preview}
                controls 
            />
        </Box>
    ) : null;
}

export default Trailer;