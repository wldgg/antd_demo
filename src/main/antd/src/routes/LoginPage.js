/**
 * Created by wangl on 2017/5/8.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './LoginPage.css';

const FormItem = Form.Item;

function validateUsername(username) {
  var reg=/^[0-9a-zA-Z_]{6,16}$/;
  alert(username);
  if(username==undefined||username===''){
    return {
      validateStatus: 'error',
      errorMsg: 'Please input your username!',
    };
  }
  if (reg.test(username)) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: '格式不匹配!',
  };
}

class NormalLoginForm extends React.Component {
  state={
    username:{
      value: '',
    },
    password:{
      value:'',
    },
  };
  handleSubmit = (e) => {
    var username = this.props.form.getFieldValue('username');
    alert(username);
    this.setState({
      username:{
        ...validateUsername(username),
        value:username,
      },
    });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        alert('login success');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const name=this.state.username;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className={styles.loginform}>
          <FormItem help={name.errorMsg} label="用户名" validateStatus={name.validateStatus}>
            {getFieldDecorator('username', {
              rules: [{ required: true}],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" value={name.value}/>
            )}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator('password', {
              rules: [{ required: true}],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className={styles.loginformforgot} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className={styles.loginformbutton}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect()(WrappedNormalLoginForm);
