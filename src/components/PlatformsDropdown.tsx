import { MenuItem, Select } from "@mui/material";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatformId?: Number;
}

const PlatformsDropdown = ({ onSelectPlatform, selectedPlatformId }: Props) => {

    const { data, error } = usePlatforms();

    if (error) 
        return null;
    
    return (
        <Select
            sx={{ width: 300, marginBottom: 2 }}
            label="Platform"
            onChange={(event) => {
                const selectedPlatform = data?.results.find(platform => platform.name === event.target.value);
                if (selectedPlatform) 
                    onSelectPlatform(selectedPlatform);
                else
                    onSelectPlatform(null);
            }}
        >
            {data?.results.map(platform => (
                <MenuItem  key={platform.id} value={platform.name}>
                    {platform.name}
                </MenuItem >
            ))}
        </Select>
    )
}

export default PlatformsDropdown;