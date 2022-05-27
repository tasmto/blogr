import { SITE_TITLE } from './constants/general';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

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
];

export { publicRoutes };
