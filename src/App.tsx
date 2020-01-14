import React from 'react'
import { LoginProvider } from 'modules/user/LoginContext'
import modules from 'modules'
import 'antd/dist/antd.css'
import { PrimaryLayout } from 'layout/PrimaryLayout'
import { BrowserRouter, Switch } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <PrimaryLayout modules={modules}></PrimaryLayout>
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
