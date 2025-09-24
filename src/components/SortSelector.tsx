import { Autocomplete, TextField } from "@mui/material";

const SortSelector = () => {

    const defaultProps = {
        options: ["Relevance", "Date added", "Name", "Released", "Popularity", "Average rating"],
    };
    
    return (
        <Autocomplete
            sx={{ width: 300, marginBottom: 2 }}
            {...defaultProps}
            disablePortal
            renderInput={(params) => (
                <TextField {...params} label="Order by: Relevance" />
            )}
            // onChange={(_event, value) => {
            //     const selectedPlatform = data.find(platform => platform.name === value);
            //     if (selectedPlatform) 
            //         onSelectPlatform(selectedPlatform);
            //     else
            //         onSelectPlatform(null);
            // }}
        />
    )
}

export default SortSelector;