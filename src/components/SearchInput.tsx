import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import useGameQueryStore from "../stateManagement/store";
import { useNavigate } from "react-router-dom";

const SearchInputs = () => {
    const searchRef = useRef<TextFieldProps>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigate = useNavigate();
  
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (searchRef.current)
                setSearchText(searchRef.current.value as string);
                navigate("/");
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