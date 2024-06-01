import React from 'react';
import PropTypes from 'prop-types';
import FailedAnimation from '../assets/animations/failed.json';
import SuccessAnimation from '../assets/animations/success.json';
import Lottie from 'react-lottie-player';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  title: string;
  body?: any;
  alert: string;
  onClose?: () => void;
  fullWidth?: boolean;
  maxWidth?: any;
}

const DialogAlert = ({
  open,
  title,
  body,
  alert,
  fullWidth,
  maxWidth,
  onClose,
}: Props) => {
  return (
    <>
      <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth}>
        <DialogTitle>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            <Lottie
              animationData={
                alert === 'success' ? SuccessAnimation : FailedAnimation
              }
              play
              loop
              style={{
                width: '50%',
                margin: 'auto',
              }}
            />
          </DialogContentText>
          <DialogContentText align="center">
            <Typography variant="h6">{body}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
DialogAlert.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.any,
  alert: PropTypes.string,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
export default DialogAlert;
