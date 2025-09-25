import { MenuItem, Select } from "@mui/material";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformsDropdown = ({ onSelectPlatform }: Props) => {

    const { data, error } = usePlatforms();

    if (error) 
        return null;
    
    return (
        <Select
            sx={{ width: 300, marginBottom: 2 }}
            label="Platform"
            onChange={(event) => {
                const selectedPlatform = data.find(platform => platform.name === event.target.value);
                if (selectedPlatform) 
                    onSelectPlatform(selectedPlatform);
                else
                    onSelectPlatform(null);
            }}
        >
            {data.map(platform => (
                <MenuItem  key={platform.id} value={platform.name}>
                    {platform.name}
                </MenuItem >
            ))}
        </Select>
    )
}

export default PlatformsDropdown;