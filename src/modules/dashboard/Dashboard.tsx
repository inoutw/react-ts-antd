import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout

const Dashboard: React.FC<{}> = () => {
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 280,
      }}>
      Dashboard
    </Content>
  )
}
export default Dashboard
