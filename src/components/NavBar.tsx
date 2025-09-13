import { Stack } from "@mui/material";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";

function NavBar() {

    return (
        <Stack
            direction={"row"}
            spacing={2}
            height={60}
            sx={{ p: 1, mt: 0 }}
        >
            <img src={logo} />
            <ColorModeSwitch/>
        </Stack>
    )
}

export default NavBar