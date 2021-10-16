import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)

            // close Dialog
            const {closeDialog} = props;
            if (closeDialog) {
                closeDialog();
            }


            console.log('New user:', values, user,);
            enqueueSnackbar('Register Successfully!', {variant: 'success'});
        } catch (error) {
            console.log('Failed to register:', error);
            enqueueSnackbar('Register Failure!', {variant: 'error'});
        }
        
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;