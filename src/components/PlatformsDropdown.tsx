import { MenuItem, Select } from "@mui/material";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatformId?: Number;
}

const PlatformsDropdown = ({ onSelectPlatform, selectedPlatformId }: Props) => {

    const { data, error } = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) 
        return null;
    
    return (
        <Select
            sx={{ width: 300, marginBottom: 2 }}
            label="Platform"
            value={selectedPlatform?.name || 'Platforms'}
        >
            {data?.results.map(platform => (
                <MenuItem key={platform.id} value={platform.name} onClick={() => onSelectPlatform(platform)}>
                    {platform.name}
                </MenuItem >
            ))}
        </Select>
    )
}

export default PlatformsDropdown;