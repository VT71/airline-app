import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
    return (
        <Box>
            <Header />
            <Box sx={{ marginTop: '64px', width: '100%' }}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default App;
