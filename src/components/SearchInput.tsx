import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import useGameQueryStore from "../stateManagement/store";

const SearchInputs = () => {
  
    const searchRef = useRef<TextFieldProps>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
  
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (searchRef.current)
                setSearchText(searchRef.current.value as string);
            }}>
            <TextField 
                inputRef={searchRef}
                fullWidth={true}
                label="Search games..." 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        )
                    }}/>;
        </form>
    )
}

export default SearchInputs;