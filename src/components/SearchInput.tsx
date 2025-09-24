import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInputs = () => {
    return <TextField 
                fullWidth={true}
                label="Search games..." 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        )
                    }}/>;
}

export default SearchInputs;