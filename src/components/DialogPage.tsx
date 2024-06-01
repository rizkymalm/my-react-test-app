import PropTypes from 'prop-types';
//mui
import { Dialog, DialogTitle, Divider, Typography } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  content: any;
  maxWidth?: any;
  fullWidth?: boolean;
}

const DialogPage = ({
  open,
  title,
  content,
  maxWidth,
  fullWidth,
  onClose,
}: Props) => {
  return (
    <Dialog
      open={open}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography variant="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      {content}
    </Dialog>
  );
};
DialogPage.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.any,
  content: PropTypes.any,
  maxWidth: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
};
export default DialogPage;
