import React from 'react';
//mui
import { FormControl } from '@mui/base';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface Props {
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onChange: any;
  error?: any;
  helperText?: string;
}

const TextFieldPassword = ({
  name,
  placeholder,
  fullWidth,
  onChange,
  error,
  helperText,
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        fullWidth={fullWidth}
        onChange={onChange}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextFieldPassword;
