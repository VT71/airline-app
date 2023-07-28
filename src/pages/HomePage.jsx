import React from 'react';
import { Box } from '@mui/material';

function HomePage() {
    return (
        <Box>
            <Box
                sx={{
                    height: '100vh',
                    width: '100%',
                    backgroundImage: 'url("./images/airport-view.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></Box>
        </Box>
    );
}

export default HomePage;
