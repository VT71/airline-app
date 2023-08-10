import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import responsiveStyle from '../lib/responsiveSettings';
import Destination from './Destination';
import EmojiPicker from 'emoji-picker-react';
import SectionHeading from './SectionHeading';

function DestinationsSection() {
    const destinations = [
        { name: 'london', priceFrom: 29.99 },
        { name: 'berlin', priceFrom: 19.99 },
        { name: 'bucharest', priceFrom: 29.99 },
        { name: 'chisinau', priceFrom: 19.99 },
    ];

    return (
        <Box
            sx={{
                ...responsiveStyle,
            }}
        >
            <SectionHeading text='Our Destinations' />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    columnGap: '0.8rem',
                    rowGap: '1.2rem',
                }}
            >
                {destinations.map((destination, index) => (
                    <Destination key={index} destination={destination} />
                ))}
            </Box>
        </Box>
    );
}

export default DestinationsSection;
