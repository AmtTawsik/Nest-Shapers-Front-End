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
      <Header className="flex items-center px-3 lg:px-12">
        {/* Sider nav button for mobile device start */}
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden"
            onClick={() => {
              dispatch(showSidebarDrawer());
            }}
          >
            DB
          </Button>
        )}
        {/* Sider nav button for mobile device end */}

        {/* Logo or site header start */}
        <Content>
          <Link href="/">
            <Title
              className={`m-0 text-white text-lg lg:text-3xl ${
                hasSider &&
                'text-center text-cyan-500 text-lg lg:text-3xl lg:text-left'
              }`}
            >
              House Crafters
            </Title>
          </Link>
        </Content>
        {/* Logo or site header start */}

        {/* Desktop menubar start */}
        <Menu
          className="lg:block hidden"
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
            <Button type="primary" className=" bg-red-500 ml-6">
              Sign Out
            </Button>
          ) : (
            <>
              <Button
                type="primary"
                onClick={() => {
                  router.push('/signin');
                }}
                className="ml-6"
              >
                Sign In
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  router.push('/register');
                }}
                className=" ml-2"
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
          className="lg:hidden bg-cyan-500"
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
              <Button type="primary" className=" bg-red-500">
                Sign Out
              </Button>
            ) : (
              <div className="mt-6">
                <Button
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
                  className="ml-2"
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
