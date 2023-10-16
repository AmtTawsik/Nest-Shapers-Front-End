//import Navbar from '@/components/ui/Navbar/Navbar';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar/Navbar'), {
  ssr: false,
});

const AdminHeader = () => {
  const items = [
    { key: '1', label: 'My Profile', href: '/admin/myProfile' },
    { key: '2', label: 'Dashboard', href: '/admin/dashboard' },
  ];
  return <Navbar items={items} hasSider />;
};

export default AdminHeader;
