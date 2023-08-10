import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import responsiveStyle from '../lib/responsiveSettings';
import Destination from './Destination';
import EmojiPicker from 'emoji-picker-react';

function DestinationsSection() {
    const destinations = ['london', 'berlin', 'bucharest', 'chisinau'];

    return (
        <Box
            sx={{
                ...responsiveStyle,
            }}
        >
            <Typography>{`Our Destinations`}</Typography>
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
