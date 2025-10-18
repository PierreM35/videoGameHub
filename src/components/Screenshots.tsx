import { CircularProgress, Grid, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import useScreenshots from "../hooks/useScreenshots";
import theme from "../theme";

interface Props {
    gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
    const { data, error, isLoading } = useScreenshots(gameId);
    const screenshots = data?.results;

    if (!screenshots || screenshots?.length == 0) return null;

    if (isLoading) return <CircularProgress />;

    if (error) throw error;
    
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <ImageList 
            cols={matchDownMd ? 1 : 2}
            gap={10}
        >
            {screenshots?.map((screenshot) => (
                <ImageListItem key={screenshot.id}>
                    <img src={screenshot.image}/>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Screenshots;