export interface MenuModal {
  name: string
  key: string
  icon?: string
  subMenu: MenuModal[]
}

export default [
  {
    name: '用户管理',
    key: '/user',
    icon: 'user',
    subMenu: [
      {
        name: '权限管理',
        key: '/user/auth',
      },
    ],
  },
]
