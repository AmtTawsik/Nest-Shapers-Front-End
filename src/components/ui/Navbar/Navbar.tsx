'use client';
import { authKey } from '@/constants/global';
import { useAppDispatch } from '@/redux/hooks';
import { showSidebarDrawer } from '@/redux/slices/sidebarSlice';
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from '@/services/auth.service';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu, Typography } from 'antd';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
  session?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { role } = getUserInfo() as any;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isUserLoggedIn = isLoggedIn();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push('/signin');
  };

  return (
    <Layout className="layout">
      <Header className="flex items-center px-3 lg:px-12 bg-teal-50 lg:h-20">
        {/* Sider nav button for mobile device start */}
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden bg-hcOrange-base"
            onClick={() => {
              dispatch(showSidebarDrawer());
            }}
          >
            Dashboard
          </Button>
        )}
        {/* Sider nav button for mobile device end */}

        {/* Logo or site header start */}
        <Content>
          <Link href="/">
            <Title
              className={`m-0 text-teal-700 text-lg lg:text-2xl font-bold ${
                hasSider &&
                'text-center text-hcGreen-base text-lg lg:text-2xl lg:text-left'
              }`}
            >
              House<span className=" text-hcOrange-base">Crafters</span>
            </Title>
          </Link>
        </Content>
        {/* Logo or site header start */}

        {/* Desktop menubar start */}
        <Menu
          className="lg:flex lg:items-center hidden bg-teal-50 text-teal-700 font-bold text-base"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
          {isUserLoggedIn ? (
            <>
              {role === 'customer' && (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    router.push('/dashboard');
                  }}
                  className="ml-6 bg-teal-700 px-6"
                >
                  Dashboard
                </Button>
              )}
              <Button
                size="large"
                type="primary"
                className=" bg-hcOrange-base px-6 ml-6"
                onClick={logOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  router.push('/signin');
                }}
                className="ml-6 bg-hcOrange-base px-6"
              >
                Sign In
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  router.push('/register');
                }}
                className=" ml-2 bg-hcOrange-base px-6"
              >
                Register
              </Button>
            </>
          )}
        </Menu>
        {/* Desktop menubar end */}

        {/* Menubar for mobile start */}
        <Button
          type="primary"
          className="lg:hidden bg-hcOrange-base"
          onClick={showDrawer}
        >
          <MenuOutlined style={{ verticalAlign: '0rem' }} />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
            {isUserLoggedIn ? (
              <Button
                type="primary"
                className=" bg-hcOrange-base px-6"
                onClick={logOut}
              >
                Sign Out
              </Button>
            ) : (
              <div className="mt-6">
                <Button
                  className="bg-hcOrange-base px-6"
                  type="primary"
                  onClick={() => {
                    router.push('/signin');
                  }}
                >
                  Sign In
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    router.push('/register');
                  }}
                  className="ml-2 bg-hcOrange-base px-6"
                >
                  Register
                </Button>
              </div>
            )}
          </Menu>
        </Drawer>
        {/* Menubar for mobile end */}
      </Header>
    </Layout>
  );
};

export default Navbar;
