import { SITE_TITLE } from '../constants/GlobalConstants';
import Homepage from '../pages/Homepage';
import { loginRoutes } from './loginRoutes';

export type routeType = {
  path: string;
  title: string;
  element: JSX.Element | any;
};

const routes: Array<routeType> = [
  {
    path: '/',
    title: `${SITE_TITLE} | Home`,
    element: Homepage,
  },
  ...loginRoutes,
];

export { routes };
