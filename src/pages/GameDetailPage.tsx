import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { CircularProgress } from "@mui/material";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import Trailer from "../components/Trailer";

const GameDetailPage = () => {
  var { slug } = useParams<string>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <CircularProgress />;

  if (error || !game) throw error;

  return (
    <>
      <h1>
        { game.name }
      </h1>
      <ExpandableText>
        {game.description_raw}
      </ExpandableText>
      <GameAttributes game={game} />
      <Trailer gameId={game.id} />
    </>
    )
}   

export default GameDetailPage