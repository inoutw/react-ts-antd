import React from 'react'
import { Menu, Icon } from 'antd'
import CSIcon from 'components/Icon'

const UserMenu: React.FC<{}> = () => {
  return (
    <div className="user-menu">
      <div className="logo-brand">
        <CSIcon type="icon-yunzhujisaomiao" className="icon icon-brand" />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default UserMenu
