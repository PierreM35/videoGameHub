import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useState } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";


const Layout = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
        const toggleDarkTheme = () => {
            setToggleDarkMode(!toggleDarkMode);
        };
        
    const myTheme = createTheme({
            palette: {
            mode: toggleDarkMode ? 'dark' : 'light',
            }
        });

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <NavBar onModeSwitch={toggleDarkTheme }  />
            <Box sx={{ padding: '2rem' }} >
                <Outlet />
            </Box>
        </ThemeProvider>
    )
}

export default Layout