import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";


interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit) return <Typography>{children}</Typography>;

    const displayedText = isExpanded ? children : children.substring(0, limit) + '...';
    const btnCaption = isExpanded ? 'Show less' : 'Show more';

    return (
        <Stack>
            <Typography>
                { displayedText }
            </Typography>
            <Button 
                variant="contained"
                onClick={() => setIsExpanded(!isExpanded)}
                sx={{
                    width: 100,
                    backgroundColor: 'yellow',
                    fontSize: '10px',
                    fontWeight: 'bold',
                }}>
                { btnCaption }
            </Button>
        </Stack>
        );
};

export default ExpandableText;