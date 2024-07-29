import { AuthTabs } from './pages/auth';
import { useRoutes } from 'react-router-dom';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ]);

  return element;
};
