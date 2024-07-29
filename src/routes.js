import { AuthTabs } from './pages/auth';
import { useRoutes } from 'react-router-dom';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';

export const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]);

  return element;
};
