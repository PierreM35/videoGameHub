import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

interface Props {
    onSearch: (searchString: string) => void;
}

const SearchInputs = ({ onSearch }: Props) => {
  
    const searchRef = useRef<TextFieldProps>(null);
  
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (searchRef.current)
                onSearch(searchRef.current.value as string);
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