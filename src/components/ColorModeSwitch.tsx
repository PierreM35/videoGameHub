import { Stack, Switch, Typography} from "@mui/material";

interface Props {
    onModeSwitch: () => void;
}

function ColorModeSwitch({onModeSwitch}: Props) {

    return (
        <Stack direction={"row"}>
            <Switch
                defaultChecked={true}
                onChange={onModeSwitch}
            />
            <Typography alignContent={"center"}>
                Dark Mode
            </Typography>
        </Stack>
    )
}

export default ColorModeSwitch