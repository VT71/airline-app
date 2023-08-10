import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import responsiveStyle from '../lib/responsiveSettings';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function ContactSection() {
    const theme = useTheme();

    return (
        <Box
            id={`helpSectionHome`}
            sx={{
                backgroundColor: `${theme.palette.secondary.main}`,
                marginTop: '2rem',
                boxSizing: 'border-box',
                paddingBottom: '2rem',
            }}
        >
            <Box
                sx={{
                    ...responsiveStyle,
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        width: '50%',
                        boxSizing: 'border-box',
                        paddingTop: '3rem',
                        paddingLeft: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        rowGap: '1.5rem',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: '0.5rem',
                            alignItems: 'center',
                        }}
                    >
                        <PhoneIcon
                            sx={{
                                color: `${theme.palette.primary.main}`,
                                fontSize: '1.6rem',
                            }}
                        />
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                color: `${theme.palette.primary.main}`,
                            }}
                        >{`+44 1234 567 890`}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: '0.5rem',
                        }}
                    >
                        <EmailIcon
                            sx={{
                                color: `${theme.palette.primary.main}`,
                                fontSize: '1.6rem',
                            }}
                        />
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                color: `${theme.palette.primary.main}`,
                            }}
                        >{`email@email.com`}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: '0.5rem',
                        }}
                    >
                        <HomeIcon
                            sx={{
                                color: `${theme.palette.primary.main}`,
                                fontSize: '1.6rem',
                            }}
                        />
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                color: `${theme.palette.primary.main}`,
                            }}
                        >{`1 london street, London, W1 1WY`}</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                        boxSizing: 'border-box',
                        paddingTop: '2rem',
                        paddingRight: '3rem',
                    }}
                >
                    <Typography
                        sx={{
                            marginBottom: '1rem',
                            color: `${theme.palette.primary.main}`,
                            fontWeight: 'bold',
                            fontSize: '1.4rem',
                        }}
                    >{`Send us a message`}</Typography>

                    <form style={{ width: '80%' }}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '0.8rem',
                            }}
                        >
                            <TextField
                                label={`Full name`}
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                label={`Email address`}
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                multiline
                                rows={4}
                                label={`Your message...`}
                                sx={{ width: '100%' }}
                            />
                            <Button
                                type={`submit`}
                                variant={`contained`}
                            >{`Send`}</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactSection;
