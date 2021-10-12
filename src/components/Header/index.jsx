import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

export default function Header() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
                                Home
                            </Link>
                        </Typography>

                        <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/todos">
                            <Button color="inherit">Todos</Button>
                        </NavLink>

                        <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/albums">
                            <Button color="inherit">Albums</Button>
                        </NavLink>

                        <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/counter">
                            <Button color="inherit">Counter</Button>
                        </NavLink>

                        <Button color="inherit" onClick={handleClickOpen}>
                            Register
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Dialog disableEscapeKeyDown onBackdropClick="false" open={open} onClose={handleClose}>
                <IconButton
                    style={{ position: 'absolute', top: '8px', right: '8px', zIndex: '1' }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>
                <DialogContent>
                    <DialogContentText>
                        {mode === MODE.REGISTER && (
                            <>
                                <Register closeDialog={handleClose} />

                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                        Already have a account? Login here
                                    </Button>
                                </Box>
                            </>
                        )}

                        {mode === MODE.LOGIN && (
                            <>
                                <Login closeDialog={handleClose} />

                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                        Don't have a account? Register here
                                    </Button>
                                </Box>
                            </>
                        )}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
