import React from 'react';
import { Card, Box } from '@mui/material';

function Destination({ destination }) {
    return (
        <Card sx={{ height: '300px', width: '200px', borderRadius: '15px' }}>
            <Box
                sx={{
                    height: '150px',
                    width: '100%',
                    ...(destination && {
                        backgroundImage: `url("./images/${destination}.jpeg")`,
                    }),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                }}
            ></Box>
        </Card>
    );
}

export default Destination;
