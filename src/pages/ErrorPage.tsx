import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

  return (
    <>
        <NavBar onModeSwitch={function (): void {} } />
        <Box sx={{ padding: '2rem' }}>
            <h1>Oops...</h1>
            <p>
                {
                    isRouteErrorResponse(error) ? 
                    'This page does not exist.' : 
                    'Sorry, an unexpected error occurred: ' + (error as Error).message
                }
            </p>
        </Box>
    </>
)}

export default ErrorPage