import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout

const PrimaryHeader: React.FC<{}> = () => (
  <Header style={{ background: '#fff', padding: 0 }}>
    <Icon className="trigger" type={false ? 'menu-unfold' : 'menu-fold'} onClick={() => {}} />
  </Header>
)
export default PrimaryHeader
