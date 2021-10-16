import { AccountCircle, Close } from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { Box, Dialog, DialogContent, DialogContentText } from '@material-ui/core';

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    // const loggedInUser = useSelector(state => state.user.current);
    // const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
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
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            {/* {!isLoggedIn && (
                            <Button color="inherit" onClick={handleClickOpen}>
                            Login
                            </Button>
                        )}

                        {isLoggedIn && (
                            <IconButton color="inherit">
                                <AccountCircle/>
                            </IconButton>
                        )} */}
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
