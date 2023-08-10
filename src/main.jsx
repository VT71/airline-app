import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import { ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

const router = createBrowserRouter([
    {
        path: '/airline-app',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/airline-app', element: <HomePage /> },
            { path: '/airline-app/signup', element: <SignUpPage /> },
        ],
    },
]);

const theme = createTheme({
    palette: { primary: { main: '#a60512' }, secondary: { main: '#e9f1fa' } },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
