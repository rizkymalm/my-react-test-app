import PropTypes from 'prop-types';
//mui
import { Button, CircularProgress } from '@mui/material';

interface Props {
  text: string;
  variant?: any;
  fullWidth?: boolean;
  startIcon?: any;
  endIcon?: any;
  type?: any;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Buttons = ({
  text,
  variant,
  fullWidth,
  startIcon,
  endIcon,
  type,
  onClick,
  loading,
  disabled,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || 'text'}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
    >
      {loading ? <CircularProgress /> : text}
    </Button>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.any,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  type: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Buttons;
