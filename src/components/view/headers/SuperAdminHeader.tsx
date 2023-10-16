// import Navbar from '@/components/ui/Navbar/Navbar';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar/Navbar'), {
  ssr: false,
});
const SuperAdminHeader = () => {
  const items = [
    { key: '1', label: 'My Profile', href: '/super-admin/my-profile' },
    { key: '2', label: 'Dashboard', href: '/super-admin/dashboard' },
  ];
  return <Navbar items={items} hasSider />;
};

export default SuperAdminHeader;
