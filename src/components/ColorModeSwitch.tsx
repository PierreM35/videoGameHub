import {Stack, Switch, Typography, useColorScheme} from "@mui/material";

function ColorModeSwitch() {
    // const { mode, setMode } = useColorScheme();

    return (
        <Stack direction={"row"}>
            <Switch
                defaultChecked={true}
                // checked={mode === 'dark'}
                // onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                // onChange={() => setMode('light')}
            />
            <Typography alignContent={"center"}>
                Dark mode
            </Typography>
        </Stack>
    )
}

export default ColorModeSwitch