import React from 'react'
import { LoginProvider } from 'modules/user/LoginContext'
import modules from 'modules'
import 'antd/dist/antd.css'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrimaryLayout from 'layout/PrimaryLayout'

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
