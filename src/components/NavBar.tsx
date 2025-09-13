import { Stack } from "@mui/material";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";

interface Props {
    onModeSwitch: () => void;
}

function NavBar({onModeSwitch}: Props) {

    return (
        <Stack
            direction={"row"}
            spacing={2}
            height={60}
            sx={{ p: 1, mt: 0, justifyContent: "space-between" }}
        >
            <img src={logo} />
            <ColorModeSwitch onModeSwitch={onModeSwitch}/>
        </Stack>
    )
}

export default NavBar