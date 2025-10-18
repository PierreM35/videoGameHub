import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { CircularProgress, Typography } from "@mui/material";

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
      <Typography>
        { game.description_raw }
      </Typography>
    </>
    )
}   

export default GameDetailPage