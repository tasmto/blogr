import { SITE_TITLE } from './constants/general';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NewPostPage from './pages/posts/NewPostPage';

const postRoutes = [
  {
    title: 'Create a new post',
    element: NewPostPage,
    path: '/posts/create',
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
