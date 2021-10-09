import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
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
       
    },

    avatar: {
        margin: '0 auto',
        

    },

    title: {
        margin: "16 0 32 0",
        textAlign: 'center',
    },

    submit: {
        marginTop: '16px',
    },
    
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object({
        
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };

    return (
        <ThemeProvider theme={theme}>
        <div className = {classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography component="h3" variant="h5" className={classes.title}>
                Create an account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />

                <Button type="submit" variant="contained" color="primary" className = {classes.submit} fullWidth>Create an account</Button>
            </form>
        </div>
        </ThemeProvider>
    );
}

export default RegisterForm;
