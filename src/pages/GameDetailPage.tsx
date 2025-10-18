import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { CircularProgress } from "@mui/material";
import GameDetail from "../components/ExpandableText";

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
      <GameDetail>
        {game.description_raw}
      </GameDetail>
    </>
    )
}   

export default GameDetailPage