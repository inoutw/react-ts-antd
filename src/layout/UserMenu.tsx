import React, { useState, useMemo } from 'react'
import { Menu, Icon } from 'antd'
import CSIcon from 'components/Icon'
import SubMenu from 'antd/lib/menu/SubMenu'
import { ClickParam } from 'antd/lib/menu'
import { useHistory } from 'react-router-dom'
import menuArr from './menu'

const UserMenu: React.FC<{}> = () => {
  const history = useHistory()
  const [current, setCurrent] = useState()
  const handleClick = (param: ClickParam) => {
    setCurrent(param.key)
    history.push(param.key)
  }
  const subMenus = useMemo(() => {
    return menuArr.map(menuItem => {
      const subMenuTitle = (
        <span>
          <Icon type={menuItem.icon} />
          <span>{menuItem.name}</span>
        </span>
      )
      const memuItems = menuItem.subMenu.map(mItem => <Menu.Item key={mItem.key}>{mItem.name}</Menu.Item>)
      return (
        <SubMenu key={menuItem.key} title={subMenuTitle}>
          {memuItems}
        </SubMenu>
      )
    })
  }, [])
  return (
    <div className="user-menu">
      <div className="logo-brand">
        <CSIcon type="icon-book" className="icon icon-brand" />
        管理系统
      </div>
      <Menu theme="dark" onClick={handleClick} defaultOpenKeys={['/']} selectedKeys={[current]} mode="inline">
        {subMenus}
      </Menu>
    </div>
  )
}
export default UserMenu
