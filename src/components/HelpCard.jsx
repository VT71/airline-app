import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LuggageIcon from '@mui/icons-material/Luggage';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

function HelpCard({ title }) {
    const theme = useTheme();

    return (
        <Card sx={{ width: '30%', height: '250px', borderRadius: '15px' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '150px',
                    backgroundColor: `${theme.palette.primary.main}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {title === 'Passenger Guidelines' && (
                    <PersonIcon
                        sx={{
                            fontSize: '5rem',
                            color: `${theme.palette.secondary.main}`,
                        }}
                    />
                )}
                {title === 'Luggage Guidelines' && (
                    <LuggageIcon
                        sx={{
                            fontSize: '5rem',
                            color: `${theme.palette.secondary.main}`,
                        }}
                    />
                )}
                {title === 'Refunds & Compensations' && (
                    <PendingActionsIcon
                        sx={{
                            fontSize: '5rem',
                            color: `${theme.palette.secondary.main}`,
                        }}
                    />
                )}
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '100px',
                    boxSizing: 'border-box',
                    paddingY: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: `${theme.palette.secondary.main}`,
                }}
            >
                <Typography
                    sx={{
                        color: `${theme.palette.primary.main}`,
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Card>
    );
}

export default HelpCard;
