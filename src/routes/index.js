import loadable from 'react-loadable';
import MainView from '../views/MainView';

const Loadable = path =>
  loadable({
    loader: () => import(`../component/${path}`),
    loading: () => null,
  });

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/simple-a',
        component: Loadable('SimpleA'),
      },
      {
        path: '/simple-b',
        component: Loadable('SimpleB'),
      },
    ],
  },
];
