// import Navbar from '@/components/ui/Navbar/Navbar';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar/Navbar'), {
  ssr: false,
});

const CustomerHeader = () => {
  const items = [
    { key: '1', label: 'Home', href: '/' },
    { key: '2', label: 'About Us', href: '/about-us' },
    { key: '3', label: 'Services', href: '/available-services' },
    { key: '4', label: 'Feedback', href: '/feedback' },
    // { key: '5', label: 'Blog', href: '/blogs' },
    // { key: '6', label: 'Contact Us', href: '/contact-us' },
    { key: '7', label: 'My Profile', href: '/my-profile' },
  ];

  console.log(items);
  return <Navbar items={items} hasSider />;
};

export default CustomerHeader;
