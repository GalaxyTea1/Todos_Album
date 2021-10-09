import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OutlinedInput, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name];

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel htmlFor="name">{label}</InputLabel>
                <Controller
                    name={name}
                    control={form.control}
                    as={OutlinedInput}
                    id="name"
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    disabled={disabled}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            </FormControl>
        </Box>
    );
}

export default PasswordField;
