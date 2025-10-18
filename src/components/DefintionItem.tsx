import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefintionItem = ({ term, children} : Props) => {
    return (
        <Stack>
            <Typography variant="h6" fontWeight="bold">
                { term }
            </Typography>
            { children}
        </Stack>
    )
}

export default DefintionItem