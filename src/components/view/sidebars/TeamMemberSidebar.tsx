import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const SuperAdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: '1', label: 'Dashboard', href: '/team-member/dashboard' },
    { key: '2', label: 'My team', href: '/team-member/my-team' },
    { key: '3', label: 'My Schedule', href: '/team-member/my-schedule' },
    { key: '4', label: 'My Profile', href: '/team-member/my-profile' },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default SuperAdminSidebar;
