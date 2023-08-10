import React from 'react';
import { Box } from '@mui/material';
import FlightBookingForm from '../components/FlightBookingForm';
import responsiveStyle from '../lib/responsiveSettings';
import DestinationsSection from '../components/DestinationsSection';

function HomePage() {
    return (
        <Box>
            <Box
                sx={{
                    height: '100vh',
                    minHeight: 'fit-content',
                    width: '100%',
                    backgroundImage: 'url("./images/airport-view.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box sx={{ ...responsiveStyle }}>
                    <Box sx={{ boxSizing: 'border-box', padding: '3rem 3rem' }}>
                        <FlightBookingForm />
                    </Box>
                </Box>
            </Box>
            <DestinationsSection />
        </Box>
    );
}

export default HomePage;
