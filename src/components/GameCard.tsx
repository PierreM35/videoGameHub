import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Game } from "../hooks/useGames";

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
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    {game.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default GameCard;