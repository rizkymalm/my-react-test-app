import { Container } from '@mui/system';
import { Form, FormikProvider, useFormik } from 'formik';
import { Buttons, TextFieldPassword, TextFields } from '../components/form';
import Page from '../components/Page';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors, touched, handleSubmit } = formik;
  return (
    <Page title="Login Page">
      <Container maxWidth="md">
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <TextFields
              name="username"
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(touched.username && errors.username)}
            />
            <TextFieldPassword
              name="password"
              placeholder={'Password'}
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(touched.username && errors.username)}
            />
            <Buttons text="Login" variant={'contained'} onClick={() => {}} />
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
};

export default LoginPage;
