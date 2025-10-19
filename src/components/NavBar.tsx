import { Stack } from "@mui/material";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import { Link } from "react-router-dom";

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
            <Link to="/">
                <img src={logo} height={60} />
            </Link>
            <SearchInput />
            <ColorModeSwitch onModeSwitch={onModeSwitch}/>
        </Stack>
    )
}

export default NavBar