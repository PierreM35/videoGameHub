import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                sx={{ height: 140, width: 250 }}
                image={game.background_image}
            />
            <CardContent>
                <Typography variant="h6" fontWeight={"bold"}>
                    {game.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardActions>
        </Card>
    );
};

export default GameCard;