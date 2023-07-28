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
    IconButton,
    Button,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { useState } from 'react';

// Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function FlightBookingForm() {
    const theme = useTheme();

    const passengerCountButtonStyle = {
        color: `${theme.palette.primary.main}`,
        fontSize: '2rem',
    };

    const destinations = {
        London: ['Berlin (BER)', 'Bucharest (OTP)', 'Chisinau (KIV)'],
        Berlin: ['London (LHR)', 'Bucharest (OTP)', 'Chisinau (KIV)'],
        Bucharest: ['London (LHR)', 'Berlin (BER)', 'Chisinau (KIV)'],
        Chisinau: ['London (LHR)', 'Berlin (BER)', 'Bucharest (OTP)'],
    };

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);

    return (
        <form>
            <Card
                sx={{
                    width: '400px',
                    boxSizing: 'border-box',
                    padding: '1.2rem',
                    borderRadius: '12px',
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
                    <FormControl fullWidth required>
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
                    <FormControl fullWidth required>
                        <InputLabel id='to-flight-selection-label'>
                            {`To`}
                        </InputLabel>
                        <Select
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
                        required
                        InputLabelProps={{ shrink: true }}
                        type={`date`}
                        id='date-flight-selection-input'
                        label='Date'
                        variant='outlined'
                        sx={{ width: '100%' }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}
                                >{`Adults`}</Typography>
                                <IconButton
                                    onClick={() => {
                                        if (adults > 1) {
                                            setAdults(
                                                (prevCount) => prevCount - 1
                                            );
                                        }
                                    }}
                                >
                                    <RemoveCircleIcon
                                        sx={{
                                            ...passengerCountButtonStyle,
                                        }}
                                    />
                                </IconButton>

                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}
                                >{`${adults}`}</Typography>
                                <IconButton
                                    onClick={() => {
                                        if (adults < 8) {
                                            setAdults(
                                                (prevCount) => prevCount + 1
                                            );
                                        }
                                    }}
                                >
                                    <AddCircleIcon
                                        sx={{
                                            ...passengerCountButtonStyle,
                                        }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}
                                >{`Children`}</Typography>
                                <IconButton
                                    onClick={() => {
                                        if (children > 1) {
                                            setChildren(
                                                (prevCount) => prevCount - 1
                                            );
                                        }
                                    }}
                                >
                                    <RemoveCircleIcon
                                        sx={{
                                            ...passengerCountButtonStyle,
                                        }}
                                    />
                                </IconButton>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}
                                >{`${children}`}</Typography>

                                <IconButton
                                    onClick={() => {
                                        if (children < 5) {
                                            setChildren(
                                                (prevCount) => prevCount + 1
                                            );
                                        }
                                    }}
                                >
                                    <AddCircleIcon
                                        sx={{
                                            ...passengerCountButtonStyle,
                                        }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Button
                    variant={`contained`}
                    sx={{
                        width: '100%',
                        marginTop: '1.1rem',
                        fontWeight: 'bold',
                    }}
                >{`Submit`}</Button>
            </Card>
        </form>
    );
}

export default FlightBookingForm;
