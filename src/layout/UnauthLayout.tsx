import React, { useState } from 'react'
import { BrowserRouter, Route as ReactRoute, Switch, Redirect } from 'react-router-dom'
import { Layout, Icon } from 'antd'
import './layout.css'
import BasicLayout from './BasicLayout'
import user from 'modules/user'
const { Header, Sider } = Layout

/**
 * 用户登录之前的Layout
 * @return
 * @param props modules array
 */
const UnauthLayout: React.FC<{ modules: Module[] }> = props => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <ReactRoute>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggleCollapse} />
          360企业安全
        </Header>
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
        <BasicLayout modules={[user]} />
      </Layout>
    </ReactRoute>
  )
}

export default UnauthLayout
