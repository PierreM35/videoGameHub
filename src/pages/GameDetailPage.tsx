import { useParams } from "react-router-dom"
import useGameDetails from "../hooks/useGameDetails";
import { CircularProgress, Typography } from "@mui/material";

const GameDetailPage = () => {
  var { slug } = useParams<string>();
  const { data: game, isLoading, error } = useGameDetails(slug!);

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