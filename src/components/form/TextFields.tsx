import PropTypes from 'prop-types';
//mui
import { TextField } from '@mui/material';

interface Props {
  id?: string;
  name: string;
  placeholder?: string;
  onChange?: any;
  fullWidth?: boolean;
  margin?: any;
  error?: any;
  value?: any;
}

const TextFields = ({
  id,
  name,
  placeholder,
  onChange,
  fullWidth,
  margin,
  error,
  value,
}: Props) => {
  return (
    <TextField
      id={id}
      name={name}
      placeholder={placeholder}
      fullWidth={fullWidth}
      margin={margin}
      onChange={onChange}
      error={error}
      defaultValue={value}
    />
  );
};

TextFields.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.any,
  fullWidth: PropTypes.bool,
  margin: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default TextFields;
