import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';

function SectionHeading({ text }) {
    const theme = useTheme();

    return (
        <Box sx={{ marginY: '1rem' }}>
            <Typography
                sx={{
                    color: `${theme.palette.primary.main}`,
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}

export default SectionHeading;
