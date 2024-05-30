import PropTypes from 'prop-types';
//mui
import { Button } from '@mui/material';

interface Props {
  text: string;
  variant?: any;
  fullWidth?: boolean;
  startIcon?: any;
  endIcon?: any;
  type?: any;
  onClick: () => void;
}

const Buttons = ({
  text,
  variant,
  fullWidth,
  startIcon,
  endIcon,
  type,
  onClick,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || 'text'}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      type={type}
    >
      {text}
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
};

export default Buttons;
