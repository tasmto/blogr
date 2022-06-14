import { SITE_TITLE } from '../constants/GlobalConstants';
import { routeType } from './routes';
import LoginPage from '../pages/accounts/LoginPage';
import RegisterPage from '../pages/accounts/RegisterPage';
import MyProfilePage from '../pages/accounts/MyProfilePage';

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
  {
    path: `${base}/profile`,
    title: `${SITE_TITLE} | My Profile`,
    element: MyProfilePage,
  },
];

export { loginRoutes };
