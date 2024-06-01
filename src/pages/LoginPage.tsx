import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//mui
import { Grid, Container, Stack, Typography, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
//formik
import { Form, FormikProvider, useFormik } from 'formik';
import Lottie from 'react-lottie-player';
import LoginAnimation from '../assets/animations/Login.json';
//components
import { Buttons, TextFieldPassword, TextFields } from '../components/form';
import Page from '../components/Page';
//hooks
import useResponsive from '../hooks/useResponseive';
import { postLoginUser } from '../redux/actions/auth';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values: any) => {
      dispatch<any>(
        postLoginUser({
          data: values,
          callback: () => {
            navigate('/');
          },
        })
      );
    },
  });
  const { errors, touched, handleSubmit } = formik;
  return (
    <Page title="Login Page">
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={7}
          xl={7}
          sx={{
            maxHeight: '100vh',
            mx: 'auto',
          }}
        >
          <ContentStyle>
            <Container maxWidth="xl">
              <Stack spacing={3}>
                <Typography variant="h4" align="center">
                  Welcome
                </Typography>
              </Stack>
            </Container>
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {authState.error && (
                    <Alert severity="error">{authState.error.message}</Alert>
                  )}
                  <TextFields
                    name="username"
                    placeholder="username"
                    fullWidth
                    margin={'dense'}
                    onChange={formik.handleChange}
                    error={Boolean(touched.username && errors.username)}
                  />
                  <TextFieldPassword
                    name="password"
                    placeholder={'Password'}
                    fullWidth
                    margin={'dense'}
                    onChange={formik.handleChange}
                    error={Boolean(touched.username && errors.username)}
                  />
                  <Buttons
                    text="Login"
                    variant={'contained'}
                    type="submit"
                    onClick={() => {}}
                  />
                </Stack>
              </Form>
            </FormikProvider>
          </ContentStyle>
        </Grid>
        {mdUp && (
          <Grid
            item
            xs={12}
            md={5}
            xl={5}
            sx={{
              height: '100vh',
              background: 'rgba(2, 170, 85, .7)',
              position: 'relative',
              borderLeft: `2px solid green`,
              display: 'flex',
            }}
          >
            <Lottie
              animationData={LoginAnimation}
              play
              style={{
                width: '80%',
                margin: 'auto',
              }}
            />
          </Grid>
        )}
      </Grid>
    </Page>
  );
};

export default LoginPage;
