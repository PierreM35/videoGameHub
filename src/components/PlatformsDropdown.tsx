import { MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stateManagement/store";

const PlatformsDropdown = () => {

    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const { data, error } = usePlatforms();
   
    const setPlatformId = useGameQueryStore(s => s.setPlatformId);
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
                <MenuItem key={platform.id} value={platform.name} onClick={() => setPlatformId(platform.id)}>
                    {platform.name}
                </MenuItem >
            ))}
        </Select>
    )
}

export default PlatformsDropdown;