import { Stack, Typography } from "@mui/material";
import logo from '../assets/logo.webp';

function NavBar() {
    return (
        <Stack
            direction={"row"}
            spacing={2}
            height={60}
            sx={{ p: 1, mt: 0 }}
        >
            <img src={logo} />
            <Typography alignContent={"center"}>NavBar</Typography>
        </Stack>
    )
}

export default NavBar