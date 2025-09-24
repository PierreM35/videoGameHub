import { Autocomplete, TextField } from "@mui/material";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformsDropdown = ({ onSelectPlatform }: Props) => {

    const { data, error } = usePlatforms();

    const defaultProps = {
        options: data.map(platform => platform.name),
    };

    if (error) 
        return null;
    
    return (
        <Autocomplete
            sx={{ width: 300, marginBottom: 2 }}
            {...defaultProps}
            disablePortal
            renderInput={(params) => (
                <TextField {...params} label="Platforms" />
            )}
            onChange={(_event, value) => {
                const selectedPlatform = data.find(platform => platform.name === value);
                if (selectedPlatform) 
                    onSelectPlatform(selectedPlatform);
                else
                    onSelectPlatform(null);
            }}
        />
    )
}

export default PlatformsDropdown;