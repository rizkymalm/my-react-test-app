import { useSelector } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function Router() {
  const authState = useSelector((state: any) => state.auth);
  return useRoutes([
    {
      path: '/',
      element: !authState.isLogin ? (
        <Navigate to="/login" replace />
      ) : (
        <HomePage />
      ),
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);
}
