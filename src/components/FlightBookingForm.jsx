import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useTheme } from '@mui/material';

function FlightBookingForm() {
    const theme = useTheme();

    return (
        <form>
            <Card sx={{}}>
                <Typography
                    sx={{ color: `${theme.palette.primary.main}` }}
                >{`Find your flight`}</Typography>
            </Card>
        </form>
    );
}

export default FlightBookingForm;
