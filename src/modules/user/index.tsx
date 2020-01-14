import Login from './Login'
const user: Module = {
  name: 'user',
  routes: [
    {
      name: '用户登录',
      path: '/login',
      component: Login,
    },
  ],
}
export default user
