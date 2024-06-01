import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui
import {
  Box,
  Card,
  IconButton,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
//actions
import {
  deleteUser,
  getUserDetail,
  getUserList,
} from '../../redux/actions/user';
//components
import DialogPage from '../../components/DialogPage';
//themes
import palette from '../../themes/palette';
import UserDetail from './UserDetail';
import DialogConfirmation from '../../components/DialogConfirmation';

const headerTable = ['Name', 'Age', 'Email', 'Phone Number', ''];

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);
  const [openDialog, seOpenDialog] = useState<boolean>(false);
  const [openDialogConfirmation, setOpenDialogConfirmation] =
    useState<boolean>(false);
  const [tempId, setTempId] = useState<any>('');
  const [params, setParams] = useState({
    page: 0,
    perPage: 10,
  });
  useEffect(() => {
    async function _getUserList() {
      dispatch<any>(
        await getUserList({
          params: {
            limit: params.perPage,
            skip: params.page * params.perPage,
          },
        })
      );
    }
    _getUserList();
  }, [dispatch, params]);

  const handleChangePage = (event: any, newPage: any) => {
    setParams({
      ...params,
      page: newPage,
    });
  };
  const handleChangeRowsPerPage = (event: any) => {
    setParams({
      ...params,
      perPage: parseInt(event.target.value),
    });
  };

  const _getUserDetail = async (id: any) => {
    dispatch<any>(
      await getUserDetail({
        user: id,
        callback: () => {
          seOpenDialog(true);
        },
      })
    );
  };
  const handleOpenConfirmation = (id: any) => {
    setTempId(id);
    setOpenDialogConfirmation(true);
  };
  const _deleteUser = async () => {
    dispatch<any>(
      await deleteUser({
        user: tempId,
        callback: () => {
          setOpenDialogConfirmation(false);
          setTempId(0);
        },
      })
    );
  };
  return (
    <>
      <DialogPage
        open={openDialog}
        title={`${userState?.detail?.data?.firstName} ${userState?.detail?.data?.lastName}`}
        content={<UserDetail />}
        onClose={() => seOpenDialog(false)}
        maxWidth="xs"
        fullWidth
      />
      <DialogConfirmation
        open={openDialogConfirmation}
        title="Delete User"
        body={'Are you sure want to delete this user?'}
        textYes="Delete"
        textNo="Cancel"
        handleNo={() => {
          setOpenDialogConfirmation(false);
          setTempId(0);
        }}
        handleYes={_deleteUser}
      />
      <Card>
        <Box width={1}>
          <Table>
            <TableHead>
              <TableRow>
                {headerTable.map((data, index) => (
                  <TableCell key={index}>{data}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userState?.list?.loading ? (
                <TableRow>
                  <TableCell colSpan={headerTable.length}>
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ) : userState?.list?.data?.total > 0 ? (
                userState?.list?.data?.users?.map((data: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell>{data?.firstName}</TableCell>
                    <TableCell>{data?.age}</TableCell>
                    <TableCell>{data?.email}</TableCell>
                    <TableCell>{data?.phone}</TableCell>
                    <TableCell>
                      <Stack direction={'row'}>
                        <Tooltip title="View User" arrow>
                          <IconButton onClick={() => _getUserDetail(data.id)}>
                            <RemoveRedEyeIcon
                              sx={{
                                fontSize: '14px',
                                color: palette.primary.main,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit User" arrow>
                          <IconButton>
                            <EditIcon
                              sx={{
                                fontSize: '14px',
                                color: palette.primary.main,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete User" arrow>
                          <IconButton
                            onClick={() => handleOpenConfirmation(data.id)}
                          >
                            <DeleteIcon
                              sx={{
                                fontSize: '14px',
                                color: palette.error.main,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={headerTable.length}>
                    No data to display
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            rowsPerPageOptions={[10, 25, 50]}
            count={userState?.list?.data?.total}
            rowsPerPage={params.perPage}
            page={params.page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Card>
    </>
  );
};

export default UserList;
