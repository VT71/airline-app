import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { useState } from 'react';

function FlightBookingForm() {
    const theme = useTheme();

    const destinations = {
        London: ['Berlin (BER)', 'Bucharest (OTP)', 'Chisinau (KIV)'],
        Berlin: ['London (LHR)', 'Bucharest (OTP)', 'Chisinau (KIV)'],
        Bucharest: ['London (LHR)', 'Berlin (BER)', 'Chisinau (KIV)'],
        Chisinau: ['London (LHR)', 'Berlin (BER)', 'Bucharest (OTP)'],
    };

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    return (
        <form>
            <Card
                sx={{
                    width: '400px',
                    boxSizing: 'border-box',
                    padding: '0.8rem 1rem',
                }}
            >
                <Typography
                    sx={{
                        color: `${theme.palette.primary.main}`,
                        fontWeight: 'bold',
                        fontSize: '1.3rem',
                    }}
                >{`Find your flight`}</Typography>
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        paddingTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '1rem',
                    }}
                >
                    <FormControl fullWidth>
                        <InputLabel id='from-flight-selection-label'>
                            {`From`}
                        </InputLabel>
                        <Select
                            required
                            labelId='from-flight-selection-label'
                            id='from-flight-selection-input'
                            value={from ? from : ''}
                            label={`From`}
                            onChange={(e) => {
                                setFrom(e.target.value);
                            }}
                        >
                            {Object.keys(destinations).map(
                                (destination, index) => {
                                    return (
                                        <MenuItem
                                            key={index}
                                            value={destination}
                                        >
                                            {destination}
                                        </MenuItem>
                                    );
                                }
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id='to-flight-selection-label'>
                            {`To`}
                        </InputLabel>
                        <Select
                            required
                            labelId='to-flight-selection-label'
                            id='to-flight-selection-input'
                            value={to ? to : ''}
                            label={`From`}
                            onChange={(e) => {
                                setTo(e.target.value);
                            }}
                        >
                            {from ? (
                                destinations[from].map((destination, index) => {
                                    return (
                                        <MenuItem
                                            key={index}
                                            value={destination}
                                        >
                                            {destination}
                                        </MenuItem>
                                    );
                                })
                            ) : (
                                <MenuItem value={''} disabled>
                                    {`Select a departure location first`}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField
                        id='outlined-basic'
                        label='Outlined'
                        variant='outlined'
                        sx={{ width: '100%' }}
                    />
                </Box>
            </Card>
        </form>
    );
}

export default FlightBookingForm;
