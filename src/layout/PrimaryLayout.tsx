import React, { useState } from 'react'
import { BrowserRouter, Route as ReactRoute, Switch } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import './layout.css'
import UserMenu from 'layout/UserMenu'
import BasicLayout from './BasicLayout'
import { useLoginContext } from 'modules/user/LoginContext'
import UnauthLayout from './UnauthLayout'
const { Header, Sider } = Layout

interface PrLayoutContext {
  collapsed: boolean
  toggleCollapse(): void
}

const PrLayoutContext = React.createContext({} as PrLayoutContext)
export default PrLayoutContext

/**
 * @return
 * @param props modules array
 */
export const PrimaryLayout: React.FC<{ modules: Module[] }> = props => {
  const [collapsed, setCollapsed] = useState(false)
  const loginContext = useLoginContext()
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  if (!loginContext.state.isLogin) {
    return <UnauthLayout modules={props.modules} />
  }
  return (
    <PrLayoutContext.Provider value={{ collapsed, toggleCollapse }}>
      <ReactRoute>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <UserMenu />
          </Sider>
          <div className="main-wrap">
            <Header style={{ background: '#fff' }}>
              <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleCollapse} />
            </Header>
            <BasicLayout modules={props.modules} />
          </div>
        </Layout>
      </ReactRoute>
    </PrLayoutContext.Provider>
  )
}
