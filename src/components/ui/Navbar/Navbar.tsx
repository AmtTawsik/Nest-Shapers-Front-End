'use client';
import { useAppDispatch } from '@/redux/hooks';
import { showSidebarDrawer } from '@/redux/slices/sidebarSlice';
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

  let session = false;

  return (
    <Layout className="layout">
      <Header className="flex items-center px-3 lg:px-12 bg-teal-50 lg:h-20">
        {/* Sider nav button for mobile device start */}
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden bg-green-base"
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
                'text-center text-blue-base text-lg lg:text-2xl lg:text-left'
              }`}
            >
              Nest<span className=" text-green-base">Shapers</span>
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
          {session ? (
            <Button
              size="large"
              type="primary"
              className=" bg-green-base px-6 ml-6"
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  router.push('/signin');
                }}
                className="ml-6 bg-green-base px-6"
              >
                Sign In
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  router.push('/register');
                }}
                className=" ml-2 bg-green-base px-6"
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
          className="lg:hidden bg-green-base"
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
            {session ? (
              <Button type="primary" className=" bg-green-base px-6">
                Sign Out
              </Button>
            ) : (
              <div className="mt-6">
                <Button
                  className="bg-green-base px-6"
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
                  className="ml-2 bg-green-base px-6"
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
