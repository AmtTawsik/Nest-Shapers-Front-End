import Navbar from '@/components/ui/Navbar/Navbar';

const AdminHeader = () => {
  const items = [{ key: '1', label: 'My Profile', href: '/admin/myProfile' }];
  return (
    <>
      <Navbar items={items} hasSider />
    </>
  );
};

export default AdminHeader;
