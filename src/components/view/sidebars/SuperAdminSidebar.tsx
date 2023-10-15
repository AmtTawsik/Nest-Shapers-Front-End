import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const SuperAdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: '1', label: 'Dashboard', href: '/super-admin/dashboard' },
    { key: '2', label: 'Admin', href: '/super-admin/admin' },
    { key: '3', label: 'users', href: '/super-admin/users' },
    { key: '4', label: 'My Profile', href: '/super-admin/my-profile' },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default SuperAdminSidebar;
