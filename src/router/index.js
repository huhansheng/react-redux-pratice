import Login from '../view/login/Login';

const routesConfig = [
  {
    path: '/',
    component: Login,
    childRoutes: [
      {
        path: '/login',
        component: Login
      }
    ]
  }
];
export default routesConfig;
