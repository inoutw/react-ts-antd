import Dashboard from './Dashboard'
const dashboard: Module = {
  name: 'dashboard',
  routes: [
    {
      name: '概览',
      path: '/',
      component: Dashboard,
    },
    {
      name: '概览',
      path: '/dashboard',
      component: Dashboard,
    },
  ],
}
export default dashboard
