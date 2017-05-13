/**
 * Created by wangl on 2017/5/8.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './LoginPage.css';
import fetch from 'dva/fetch';


const FormItem = Form.Item;

function validateUsername(username) {
  var reg=/^[0-9a-zA-Z_]{6,16}$/;
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
    errorMsg: '请输入长度为6-16，由大小写字母，数字，下划线组成的账号!',
  };
}

function validatePassword(pwd) {
  var reg=/^[0-9a-zA-Z_]{6,16}$/;
  if(pwd==undefined||pwd===''){
    return {
      validateStatus: 'error',
      errorMsg: 'Please input your password!',
    };
  }
  if (reg.test(pwd)) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: '请包含大小写字母，数字，特殊字符中的至少两种!',
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
    var password = this.props.form.getFieldValue('password');
    this.setState({
      username:{
        ...validateUsername(username),
        value:username,
      },
      password:{
        ...validatePassword(password),
        value:password,
      },
    });
    e.preventDefault();
    alert('no1');
    this.props.form.validateFields((err, values) => {
      if (this.state.username.validateStatus=='success'&&this.state.password.validateStatus=='success') {
        console.log('Received values of form: ', values);
        let data='username='+this.state.username.value+'&password='+this.state.password.value;
        var xmlhttp=new XMLHttpRequest();
        alert('no2');

        xmlhttp.onreadystatechange=function () {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
          {
            alert('login success');
          }
        }
        xmlhttp.open("POST","http://localhost:8080/user/login",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(data);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const name=this.state.username;
    const pwd=this.state.password;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className={styles.loginform}>
          <FormItem label="用户名" help={name.errorMsg} validateStatus={name.validateStatus}>
            {getFieldDecorator('username', {
              rules: [{ required: true}],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" value={name.value}/>
            )}
          </FormItem>
          <FormItem label="密码" help={pwd.errorMsg} validateStatus={pwd.validateStatus}>
            {getFieldDecorator('password', {
              rules: [{ required: true}],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" value={pwd.value}/>
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
  };
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect()(WrappedNormalLoginForm);
