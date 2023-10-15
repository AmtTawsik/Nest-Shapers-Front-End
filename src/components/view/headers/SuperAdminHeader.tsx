import Navbar from '@/components/ui/Navbar/Navbar';

const SuperAdminHeader = () => {
  const items = [
    { key: '1', label: 'My Profile', href: '/super-admin/my-profile' },
  ];
  return (
    <>
      <Navbar items={items} hasSider />
    </>
  );
};

export default SuperAdminHeader;
