import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">Home</Link>
                    </Typography>

                    <NavLink to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>

                    <NavLink to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>

                    <NavLink to="/counter">
                        <Button color="inherit">Counter</Button>
                    </NavLink>

                    <Button color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
