import React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    useTheme,
} from '@mui/material';

function Header() {
    const theme = useTheme();

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
                        component={`a`}
                        href={``}
                        sx={{
                            fontFamily: 'Michroma, sans-serif',
                            fontSize: '1.4rem',
                            textDecoration: 'none',
                            color: `#fff`,
                        }}
                    >{`VT-AIR`}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: '2rem',
                        }}
                    >
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Help`}</Typography>
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Sign Up`}</Typography>
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Login`}</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
