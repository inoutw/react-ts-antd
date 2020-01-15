import React, { useContext } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { PrLayoutContext } from './PrimaryLayout'
import { useLoginContext } from 'modules/user/LoginContext'
import { useHistory } from 'react-router-dom'
const { Header, Sider, Content } = Layout

const PrimaryHeader: React.FC<{}> = () => {
  const prLayoutContext = useContext(PrLayoutContext)
  const loginContext = useLoginContext()
  const history = useHistory()
  const logout = () => {
    loginContext.logout()
  }
  return (
    <Header style={{ background: '#fff' }}>
      <Icon
        className="trigger"
        type={prLayoutContext.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={prLayoutContext.toggleCollapse}
      />
      <div className="logout-btn" onClick={logout}>
        logout
      </div>
    </Header>
  )
}
export default PrimaryHeader
