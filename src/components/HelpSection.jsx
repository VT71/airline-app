import React from 'react';
import { Box } from '@mui/material';
import SectionHeading from './SectionHeading';
import HelpCard from './HelpCard';
import responsiveStyle from '../lib/responsiveSettings';

function HelpSection() {
    return (
        <Box
            sx={{
                ...responsiveStyle,
            }}
        >
            <SectionHeading text={`Help`} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                <HelpCard title={'Passenger Guidelines'} />
                <HelpCard title={'Luggage Guidelines'} />
                <HelpCard title={'Refunds & Compensations'} />
            </Box>
        </Box>
    );
}

export default HelpSection;
