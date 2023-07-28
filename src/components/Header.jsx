import React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    useTheme,
} from '@mui/material';
import responsiveStyle from '../lib/responsiveSettings';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const theme = useTheme();

    const pages = ['Help', 'Sign Up', 'Login'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                        ...responsiveStyle,
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
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Help`}</Typography>
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Sign Up`}</Typography>
                        <Typography
                            component={`a`}
                            href={``}
                            sx={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: `#fff`,
                            }}
                        >{`Login`}</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            display: { xs: 'flex', sm: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign='center'>
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
