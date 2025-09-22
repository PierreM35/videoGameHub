import { Autocomplete, TextField } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";

const PlatformsDropdown = () => {

    const { data, error } = usePlatforms();

    const defaultProps = {
        options: data.map(platform => platform.name),
    };

    if (error) return null;
    
    return (
        <Autocomplete
            sx={{ width: 300, marginBottom: 2 }}
            {...defaultProps}
            disablePortal
            renderInput={(params) => (
                <TextField {...params} label="Platforms" />
            )}
        />
    )
}

export default PlatformsDropdown;