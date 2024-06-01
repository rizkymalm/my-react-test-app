import { useSelector } from 'react-redux';
//mui
import {
  Avatar,
  Box,
  Grid,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
//themes
import palette from '../../themes/palette';

const UserDetail = () => {
  const userState = useSelector((state: any) => state.user);
  return (
    <Box width={1}>
      <Grid container p={2} spacing={1}>
        <Grid item xs={12} md={4} xl={4}>
          {userState?.detail?.loading ? (
            <Skeleton variant="circular">
              <Avatar sx={{ width: 100, height: 100 }} />
            </Skeleton>
          ) : (
            <Avatar
              alt="image-profile"
              src={userState?.detail?.data?.image}
              sx={{
                width: 100,
                height: 100,
                border: `2px solid ${palette.primary.main}`,
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>{userState?.detail?.data?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{userState?.detail?.data?.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{userState?.detail?.data?.age} Years old</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetail;
