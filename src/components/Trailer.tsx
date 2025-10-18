import { CircularProgress } from "@mui/material";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const Trailer = ({ gameId }: Props) => {
    const { data, error, isLoading } = useTrailers(gameId);
    const firstTrailer = data?.results[0];

    if (isLoading) return <CircularProgress />;

    if (error) throw error;
    
    return firstTrailer ? (
        <video 
            src={firstTrailer.data[480]}
            poster={firstTrailer.preview}
            controls 
        />
    ) : null;
}

export default Trailer;