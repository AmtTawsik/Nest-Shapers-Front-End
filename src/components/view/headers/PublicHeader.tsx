//import Navbar from '@/components/ui/Navbar/Navbar';

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar/Navbar'), {
  ssr: false,
});

const PublicHeader = () => {
  const items = [
    { key: '1', label: 'Home', href: '/' },
    { key: '2', label: 'About Us', href: '/about-us' },
    { key: '3', label: 'Services', href: '/available-services' },
    // { key: '4', label: 'Blog', href: '/blogs' },
  ];
  return <Navbar items={items} />;
};

export default PublicHeader;
