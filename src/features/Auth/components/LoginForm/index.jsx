import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography, LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PasswordField from '../../../../components/form-controls/PasswordField';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },

    avatar: {
        margin: '0 auto',
    },

    title: {
        margin: '16 0 32 0',
        textAlign: 'center',
    },

    submit: {
        marginTop: '16px',
    },

    progress: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
}));

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object({
        identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                {isSubmitting && <LinearProgress style={{ top: '8px' }} className={classes.progress} />}

                <Avatar className={classes.avatar}>
                    <LockOutlined></LockOutlined>
                </Avatar>

                <Typography component="h3" variant="h5" className={classes.title}>
                    Sign In
                </Typography>

                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputField name="identifier" label="Email" form={form} />
                    <PasswordField name="password" label="Password" form={form} />

                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        fullWidth
                    >
                        Sign in
                    </Button>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default LoginForm;
