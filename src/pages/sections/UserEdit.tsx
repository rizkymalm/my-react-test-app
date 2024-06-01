import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui
import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';
//components
import { Buttons, TextFields } from '../../components/form';
import { Form, FormikProvider, useFormik } from 'formik';
import { putUpdateUser } from '../../redux/actions/user';
import DialogAlert from '../../components/DialogAlert';

const UserEdit = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);
  const [alert, setAlert] = useState<any>({
    open: false,
    title: '',
    type: '',
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    onSubmit: async (values) => {
      await dispatch<any>(
        putUpdateUser({
          user: userState?.detail?.data?.id,
          data: values,
          callback: () => {
            setAlert({
              open: true,
              title: 'Success edit user',
              type: 'success',
            });
          },
        })
      );
    },
  });
  const { errors, touched, handleSubmit } = formik;
  return (
    <Box width={1} p={2}>
      <DialogAlert
        open={alert.open}
        title={alert.title}
        alert={alert.type}
        onClose={() => {
          setAlert({
            open: false,
            title: '',
            type: '',
          });
        }}
      />
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={handleSubmit}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>FirstName</TableCell>
                <TableCell>
                  <TextFields
                    id="firstName"
                    name="firstName"
                    value={userState?.detail?.data?.firstName}
                    fullWidth
                    onChange={formik.handleChange}
                    error={Boolean(touched.firstName && errors.firstName)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>
                  <TextFields
                    id="lastName"
                    name="lastName"
                    value={userState?.detail?.data?.lastName}
                    fullWidth
                    onChange={formik.handleChange}
                    error={Boolean(touched.lastName && errors.lastName)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>
                  <TextFields
                    id="phone"
                    name="phone"
                    value={userState?.detail?.data?.phone}
                    fullWidth
                    onChange={formik.handleChange}
                    error={Boolean(touched.phone && errors.phone)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>
                  <TextFields
                    id="email"
                    name="email"
                    value={userState?.detail?.data?.email}
                    fullWidth
                    onChange={formik.handleChange}
                    error={Boolean(touched.email && errors.email)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Buttons text="Update" type={'submit'} variant="contained" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Form>
      </FormikProvider>
    </Box>
  );
};

export default UserEdit;
