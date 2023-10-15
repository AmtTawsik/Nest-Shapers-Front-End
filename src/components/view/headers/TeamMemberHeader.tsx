import Navbar from '@/components/ui/Navbar/Navbar';

const TeamMemberHeader = () => {
  const items = [
    { key: '1', label: 'My Profile', href: '/team-member/my-profile' },
  ];
  return (
    <>
      <Navbar items={items} hasSider />
    </>
  );
};

export default TeamMemberHeader;
