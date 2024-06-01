import React from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from '../assets/animations/loading.json';
import Lottie from 'react-lottie-player';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface Props {
  open: boolean;
  title: string;
  body: any;
  alert?: any;
  loading?: boolean;
  textYes?: string;
  textNo?: string;
  handleYes?: () => void;
  handleNo?: () => void;
  maxWidth?: any;
  loadingSubmit?: any;
}

const DialogConfirmation = ({
  open,
  title,
  body,
  alert,
  textYes,
  textNo,
  handleYes,
  handleNo,
  maxWidth,
  loading,
  loadingSubmit,
}: Props) => {
  return (
    <>
      <Dialog open={open} maxWidth={maxWidth}>
        {loading ? (
          <Lottie
            animationData={LoadingAnimation}
            play
            loop
            style={{
              position: 'absolute',
              background: 'rgba(0,0,0,.3)',
              width: '100%',
              height: '100%',
              zIndex: '100',
            }}
          />
        ) : (
          ''
        )}
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{body}</DialogContentText>
          <DialogContentText style={{ fontSize: '12px' }}>
            {alert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {textNo && <Button onClick={handleNo}>{textNo}</Button>}
          {textYes && (
            <Button onClick={handleYes} disabled={loadingSubmit}>
              {loadingSubmit ? <CircularProgress /> : textYes}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
DialogConfirmation.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.any,
  alert: PropTypes.any,
  textYes: PropTypes.string,
  textNo: PropTypes.string,
  handleYes: PropTypes.any,
  handleNo: PropTypes.any,
  maxWidth: PropTypes.string,
  loading: PropTypes.bool,
  loadingSubmit: PropTypes.bool,
};
export default DialogConfirmation;
