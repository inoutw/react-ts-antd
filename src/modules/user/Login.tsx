import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import './user.css'
import { useLoginContext } from './LoginContext'
import { useHistory } from 'react-router-dom'

interface LoginProps {
  form: WrappedFormUtils
}

const Login: React.FC<LoginProps> = props => {
  const loginContext = useLoginContext()
  const history = useHistory()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        if (values.username === 'admin' && values.password === '123456') {
          loginContext.login(values)
          history.push('/dashboard')
        }
      }
    })
  }
  const { getFieldDecorator } = props.form
  return (
    <div className="login-container">
      <Row>
        <Col span={4} offset={16}>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <div className="inline-between">
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="/reset-password">
                  Forgot password
                </a>
              </div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
const LoginForm = Form.create({ name: 'login' })(Login)
export default LoginForm
