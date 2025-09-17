import { Badge, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card sx={{ maxWidth: 250 }} style={{ backgroundColor: '#263238' }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140, width: 250 }}
                    image={game.background_image}
                />
                <CardContent >
                    <Stack>
                        <Typography variant="h6" fontWeight={"bold"} align="left">
                            {game.name}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                            <CriticScore score={game.metacritic} />
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default GameCard;