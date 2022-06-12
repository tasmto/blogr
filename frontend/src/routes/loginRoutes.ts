import { SITE_TITLE } from '../constants/GlobalConstants';
import { routeType } from './routes';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/login/RegisterPage';

const base = '';
const loginRoutes: Array<routeType> = [
  {
    path: `${base}/sign-in`,
    title: `${SITE_TITLE} | Sign In`,
    element: LoginPage,
  },
  {
    path: `${base}/sign-up`,
    title: `${SITE_TITLE} | Sign Up`,
    element: RegisterPage,
  },
];

export { loginRoutes };
