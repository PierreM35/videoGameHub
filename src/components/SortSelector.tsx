import { Autocomplete, TextField } from "@mui/material";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Released" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ]

    const defaultProps = {
        options: sortOrders.map((option) => option.label),
    };
    
    const selectedSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <Autocomplete
            sx={{ width: 300, marginBottom: 2 }}
            {...defaultProps}
            disablePortal
            renderInput={(params) => (
                <TextField {...params} label={'Sorted by: ' + selectedSortOrder?.label} />
            )}
            onChange={(_event, value) => {
                const selectedSortOrder = sortOrders.find(
                    (order) => order.label === value
                )?.value;
                onSelectSortOrder(selectedSortOrder || "");
            }}
        />
    )
}

export default SortSelector;