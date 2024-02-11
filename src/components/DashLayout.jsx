const antd = require('antd');
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
const { Layout, Menu, theme } = antd;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
export default function DashLayout({ children }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
              {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
              <Link href="/dashboard">
        <div style={{ cursor: 'pointer' }} className='text-white flex gap-5 px-5 py-3 hover:bg-green-400'>
          <ShopOutlined />
          <span>Dashboard</span>
            </div>
            </Link>
        <Link href="/dashboard/AddProduct">
            <div style={{ cursor: 'pointer' }} className='text-white flex gap-5 px-5 py-3 hover:bg-green-400'>
            <ShopOutlined />
            <span>Add Product</span>
            </div>
        </Link>
        <div style={{ cursor: 'pointer' }} className='text-white flex gap-5 px-5 py-3 hover:bg-green-400'>
          <ShopOutlined />
          <span>All Product</span>
        </div>
        <div style={{ cursor: 'pointer' }} className='text-white flex gap-5 px-5 py-3 hover:bg-green-400'>
          <ShopOutlined />
          <span>All User</span>
        </div>
        <div style={{ cursor: 'pointer' }} className='text-white flex gap-5 px-5 py-3 hover:bg-green-400'>
          <ShopOutlined />
          <span>All Order</span>
        </div>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          IStore ©{new Date().getFullYear()} 
        </Footer>
      </Layout>
    </Layout>
  );
}