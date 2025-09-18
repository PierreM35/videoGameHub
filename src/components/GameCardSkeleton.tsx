import { Card, CardContent, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
    return (
        <Card >
            <Skeleton 
                variant="rectangular" 
                height={140}
            />
                <CardContent >
                    <Skeleton height={30} />
                </CardContent>
        </Card>
    );
}

export default GameCardSkeleton;