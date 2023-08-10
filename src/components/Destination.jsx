import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

function Destination({ destination }) {
    const theme = useTheme();

    if (destination) {
        return (
            <Card
                sx={{
                    height: '240px',
                    width: '200px',
                    borderRadius: '15px',
                    backgroundColor: `${theme.palette.secondary.main}`,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        height: '150px',
                        width: '100%',
                        ...(destination.name && {
                            backgroundImage: `url("./images/${destination.name}.jpeg")`,
                        }),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></Box>
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        padding: '0.5rem 0.6rem',
                    }}
                >
                    <Typography
                        sx={{
                            color: `${theme.palette.primary.main}`,
                            fontWeight: 'bold',
                            fontSize: '1.3rem',
                        }}
                    >
                        {destination.name &&
                            destination.name.charAt(0).toUpperCase() +
                                destination.name.slice(1)}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'end',
                            position: 'absolute',
                            bottom: '0.8rem',
                            right: '0.8rem',
                        }}
                    >
                        <Typography
                            sx={{
                                color: `${theme.palette.primary.main}`,
                                fontStyle: 'italic',
                            }}
                        >
                            {destination.priceFrom &&
                                `From £${destination.priceFrom}`}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        );
    } else {
        return null;
    }
}

export default Destination;
