import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const CustomerSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: '1', label: 'Dashboard', href: '/dashboard' },
    { key: '2', label: 'My bookings', href: '/my-bookings' },
    // { key: '3', label: 'Messages', href: '/my-message' },
    { key: '4', label: 'My Profile', href: '/my-profile' },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default CustomerSidebar;
