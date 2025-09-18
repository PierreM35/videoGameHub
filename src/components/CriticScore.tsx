import { Box, Typography } from "@mui/material";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

    return (
        <Box style={{
            backgroundColor: color, 
            padding: '0px 8px', 
            borderRadius: 5}}>
            <Typography >
                {score}
            </Typography>
        </Box>
    );
}

export default CriticScore;