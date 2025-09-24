import { MenuItem, Select } from "@mui/material";

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

    return (
        <Select
            sx={{ width: 300, marginBottom: 2 }}
            label="Sort By"
            onChange={(_event, value) => {
                const selectedSortOrder = sortOrders.find(
                    (order) => order.label === value
                )?.value;
                onSelectSortOrder(selectedSortOrder || "");
            }}
        >
            {sortOrders.map((order) => (
                <MenuItem key={order.value} value={order.label}>
                    {order.label}
                </MenuItem>
            ))}
        </Select>
    )
}

export default SortSelector;