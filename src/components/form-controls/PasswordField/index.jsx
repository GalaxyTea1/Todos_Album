import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];

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
            <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
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
                />
                <FormHelperText>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
}

export default PasswordField;
