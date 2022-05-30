import { SITE_TITLE } from './constants/general';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NewPostPage from './pages/posts/NewPostPage';
import RegisterPage from './pages/user/RegisterPage';
import LoginPage from './pages/user/LoginPage';
import ForgotPasswordPage from './pages/user/ForgotPasswordPage';
import SinglePostPage from './pages/posts/SinglePostPage';
import EditPostPage from './pages/posts/EditPostPage';

const postRoutes = [
  {
    title: 'Create a new post',
    element: NewPostPage,
    path: '/posts/create',
  },
  {
    title: 'Post',
    element: SinglePostPage,
    path: '/posts/:postId',
  },
  {
    title: 'Create Post',
    element: EditPostPage,
    path: '/posts/create/:postId',
  },
  {
    title: 'Edit Post',
    element: EditPostPage,
    path: '/posts/edit/:postId',
  },
];

const userRoutes = [
  {
    title: 'Register',
    element: RegisterPage,
    path: '/user/register',
  },
  {
    title: 'Login',
    element: LoginPage,
    path: '/user/login',
  },
  {
    title: 'Forgot password',
    element: ForgotPasswordPage,
    path: '/user/forgot-password',
  },
];
const publicRoutes = [
  {
    title: `${SITE_TITLE}`,
    element: HomePage,
    path: '/',
    exact: true,
  },

  {
    title: `Whoops`,
    element: NotFound,
    path: '*',
    exact: true,
  },
  {
    title: `Discover ${SITE_TITLE}`,
    element: HomePage,
    path: '/posts/',
  },
  ...postRoutes,
  ...userRoutes,
];

const headerRoutes = [
  {
    title: `${SITE_TITLE}`,
    element: HomePage,
    path: '/',
    exact: true,
  },
  {
    title: `Whoops`,
    element: NotFound,
    path: '*',
    exact: true,
  },
];

export { publicRoutes, headerRoutes };
