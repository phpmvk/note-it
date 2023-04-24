import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='login-container justify-center mt-40'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            onClick={() => navigate('/home')}
            className='login-form-button bg-blue-600 mr-2'
          >
            Log in
          </Button>

          <Button
            type='primary'
            htmlType='submit'
            onClick={() => navigate('/signup')}
            className='login-form-button bg-blue-600 ml-2'
          >
            Register now!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
