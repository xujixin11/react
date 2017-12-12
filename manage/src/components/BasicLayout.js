/**
 * 2017-11-27 Xu Jixin
 */
import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Breadcrumb, Spin, Dropdown, Button } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class BasicLayout extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">我能跳到支付宝</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">俺能跳到淘宝</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">不好意思，我跳转不了</Menu.Item>
      </Menu>
    );
    const layout = (
      <Layout>
        <Sider>
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>崩坏3rd</h1>
            </Link>
          </div>
          <div className={styles.sider}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>雷电 芽衣</span></span>}>
                <MenuItemGroup key="g1" title="机械类">
                  <Menu.Item key="1"><Link className={styles.header} to="/a">影舞冲击</Link></Menu.Item>
                  <Menu.Item key="2">御神装·勿忘</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="生物类">
                  <Menu.Item key="3">逆神巫女</Menu.Item>
                  <Menu.Item key="4">真炎幸魂</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>琪娜亚·卡斯兰娜</span></span>}>
                <Menu.Item key="5">白骑士·月光</Menu.Item>
                <Menu.Item key="6">圣女祈祷</Menu.Item>
                <SubMenu key="sub3" title="机械类">
                  <Menu.Item key="7">女武神·游侠</Menu.Item>
                  <Menu.Item key="8">圣仪装·今样</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>布洛妮娅·扎伊切克</span></span>}>
                <Menu.Item key="9">银狼的黎明</Menu.Item>
                <Menu.Item key="10">次元边界突破</Menu.Item>
                <Menu.Item key="11">雪地狙击</Menu.Item>
                <Menu.Item key="12">异度黑核侵蚀</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header>
            <div className={styles.header}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button className="ant-dropdown-link" href="#">
                  点我，快点我啊 <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
          </Header>
          <Content>
            <div style={{ minHeight: 'calc(100vh)' }} className={styles.content}>
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">雷电 芽衣</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">机械类</a></Breadcrumb.Item>
                <Breadcrumb.Item>影舞冲击</Breadcrumb.Item>
              </Breadcrumb>
              <h2>欢迎来到崩坏3rd</h2>
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </div>
          </Content>
          <Footer>
            <h3 className={styles.footer}>
              <a href="https://github.com/xujixin11" Target="_blank">Github</a>
              <p>Copyright <Icon type="copyright" /> 2017 崩坏3官方部门技术总监徐基欣出品</p>
            </h3>
          </Footer>
        </Layout>
      </Layout>
    );
    return (
      <div>{layout}</div>
    );
  }
}

export default BasicLayout;
