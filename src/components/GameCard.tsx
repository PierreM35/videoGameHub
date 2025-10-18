import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { useNavigate } from "react-router-dom";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    const navigate = useNavigate();

    return (
        <Card 
            style={{ backgroundColor: '#263238' }}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.transition = 'transform 0.3s';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.transition = 'transform 0.3s';
            }}
            onClick={() => {
                navigate('/games/' + game.slug);
            }}
        >
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140}}
                    image={getCroppedImageUrl(game.background_image)}
                />
                <CardContent >
                    <Stack>
                        <Stack 
                            direction="row" 
                            sx={{mb: 1}}
                            justifyContent="space-between">
                            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                            <CriticScore score={game.metacritic} />
                        </Stack>
                        <Stack>
                            <Typography variant="h6" fontWeight={"bold"} align="left">
                                {game.name}
                            </Typography>
                            <Emoji rating={game.rating_top} />
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default GameCard;