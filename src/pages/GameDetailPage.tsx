import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import Trailer from "../components/Trailer";
import Screenshots from "../components/Screenshots";
import theme from "../theme";

const GameDetailPage = () => {
  var { slug } = useParams<string>();
  const { data: game, isLoading, error } = useGame(slug!);
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoading) return <CircularProgress />;

  if (error || !game) throw error;

  const gridSize = matchDownMd ? 12 : 6;

  return (
    <Grid container spacing={2} marginTop='20px'>
      <Grid size={gridSize}>
        <h1>
          { game.name }
        </h1>
        <ExpandableText>
          {game.description_raw}
        </ExpandableText>
        <GameAttributes game={game} />
      </Grid>
      <Grid size={gridSize}>
        <Trailer gameId={game.id} />
        <Screenshots gameId={game.id} />
      </Grid>
   </Grid> 
  )
}   

export default GameDetailPage