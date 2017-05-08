/**
 * Created by wangl on 2017/5/5.
 */
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import styles from './Layout.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const myLayout = React.createClass({
  render(){
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider style={{ overflow: 'auto' }}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            <SubMenu
              key="sub1" title={<span><Icon type="user" /><span >User</span></span>}
            >
              <Menu.Item key="1">
                <Icon type="user" />
                <span >nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span >nav 2</span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span >nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span >nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span >nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span >nav 6</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="team" />
              <span >nav 7</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span >nav 8</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="shop" />
              <span >nav 9</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="shop" />
              <span >nav 0</span>
            </Menu.Item>
            <Menu.Item key="11">
              <Icon type="shop" />
              <span >nav 1</span>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="shop" />
              <span >nav 2</span>
            </Menu.Item>
            <Menu.Item key="13">
              <Icon type="shop" />
              <span >nav 3</span>
            </Menu.Item>
            <Menu.Item key="14">
              <Icon type="shop" />
              <span >nav 4</span>
            </Menu.Item>
            <Menu.Item key="15">
              <Icon type="cloud-o" />
              <span >nav 5</span>
            </Menu.Item>
            <Menu.Item key="16">
              <Icon type="appstore-o" />
              <span >nav 6</span>
            </Menu.Item>
            <Menu.Item key="17">
              <Icon type="team" />
              <span >nav 7</span>
            </Menu.Item>
            <Menu.Item key="18">
              <Icon type="shop" />
              <span >nav 8</span>
            </Menu.Item>
            <Menu.Item key="19">
              <Icon type="shop" />
              <span >nav 9</span>
            </Menu.Item>
            <Menu.Item key="20">
              <Icon type="shop" />
              <span >nav 0</span>
            </Menu.Item>
            <Menu.Item key="21">
              <Icon type="shop" />
              <span >nav 1</span>
            </Menu.Item>
            <Menu.Item key="22">
              <Icon type="shop" />
              <span >nav 2</span>
            </Menu.Item>
            <Menu.Item key="23">
              <Icon type="shop" />
              <span >nav 3</span>
            </Menu.Item>
            <Menu.Item key="24">
              <Icon type="shop" />
              <span >nav 4</span>
            </Menu.Item>
            <Menu.Item key="25">
              <Icon type="cloud-o" />
              <span >nav 5</span>
            </Menu.Item>
            <Menu.Item key="26">
              <Icon type="appstore-o" />
              <span >nav 6</span>
            </Menu.Item>
            <Menu.Item key="27">
              <Icon type="team" />
              <span >nav 7</span>
            </Menu.Item>
            <Menu.Item key="28">
              <Icon type="shop" />
              <span >nav 8</span>
            </Menu.Item>
            <Menu.Item key="29">
              <Icon type="shop" />
              <span >nav 9</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Layout>
            {/*<Header style={{ background: '#fff', padding: 0 }} />*/}
            <Header style={{ position: 'fixed', width: '100%'}}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <SubMenu key="hsub1" title={<span><span >User</span></span>}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Breadcrumb style={{ position: 'fixed', margin: '70px 0 0 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Layout>
          <Layout>
            <Content style={{ margin: '90px 0 0', overflow: 'auto' }}>
              <div style={{ padding: 10, background: '#fff', textAlign: 'center' }}>
                ...
                <br />
                Really
                <br />...<br />...<br />...<br />
                long
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />
                content
              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
});

export default connect()(myLayout);

