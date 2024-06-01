import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui
import {
  Avatar,
  Card,
  Container,
  Grid,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
//components
import Page from '../components/Page';
import { getUserProfile } from '../redux/actions/user';
import palette from '../themes/palette';
import UserList from './sections/UserList';

const HomePage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);
  useEffect(() => {
    async function _getUserProfile() {
      await dispatch<any>(
        getUserProfile({})
      );
    }
    _getUserProfile();
  }, [dispatch]);

  return (
    <Page title="Home Page">
      <Container maxWidth="lg" sx={{ maxHeight: '100vh' }}>
        <Grid container p={1} pt={5} spacing={2} sx={{ maxHeight: '100vh' }}>
          <Grid item xs={12} md={4} xl={4}>
            <Card>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  xl={12}
                  sx={{ justifyContent: 'center', display: 'flex' }}
                >
                  {userState?.profile?.loading ? (
                    <Skeleton variant="circular">
                      <Avatar sx={{ width: 200, height: 200 }} />
                    </Skeleton>
                  ) : (
                    <Avatar
                      alt="image-profile"
                      src={userState?.profile?.data?.image}
                      sx={{
                        width: 200,
                        height: 200,
                        border: `2px solid ${palette.primary.main}`,
                      }}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                  {userState?.profile?.loading ? (
                    <Skeleton variant="text" width={200} />
                  ) : (
                    <Typography variant="h6">
                      {userState?.profile?.data?.firstName}{' '}
                      {userState?.profile?.data?.lastName}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell width={100}>
                          <Typography variant="caption">Email</Typography>
                        </TableCell>
                        <TableCell>
                          {userState?.profile?.loading ? (
                            <Skeleton variant="text" />
                          ) : (
                            <Typography variant="caption">
                              {userState?.profile?.data?.email}
                            </Typography>
                          )}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography variant="caption">Number</Typography>
                        </TableCell>
                        <TableCell>
                          {userState?.profile?.loading ? (
                            <Skeleton variant="text" />
                          ) : (
                            <Typography variant="caption">
                              {userState?.profile?.data?.phone}
                            </Typography>
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} xl={8}>
            <UserList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default HomePage;
