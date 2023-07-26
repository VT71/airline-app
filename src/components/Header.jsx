import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';

function Header() {
    return (
        <AppBar>
            <Container>
                <Toolbar
                    disableGutters
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '@media (max-width: 599px)': {
                            margin: '0 16px',
                        },
                        '@media (min-width: 600px)': {
                            margin: '0 32px',
                        },
                        '@media (min-width: 905px)': {
                            margin: '0 auto',
                            width: '840px',
                        },
                        '@media (min-width: 1240px)': {
                            margin: '0 200px',
                            width: 'auto',
                        },
                        '@media (min-width: 1440px)': {
                            margin: '0 auto',
                            width: '1100px',
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Michroma, sans-serif',
                        }}
                    >{`VT-AIR`}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: '1rem',
                        }}
                    >
                        <Typography>{`Help`}</Typography>
                        <Typography>{`Sign Up`}</Typography>
                        <Typography>{`Login`}</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
