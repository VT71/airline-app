import React from 'react';
import { Box, Card } from '@mui/material';
import { useTheme } from '@mui/material';
import responsiveStyle from '../lib/responsiveSettings';

function SignUpPage() {
    const theme = useTheme();

    return (
        <Box sx={{ ...responsiveStyle }}>
            <Card></Card>
        </Box>
    );
}

export default SignUpPage;
