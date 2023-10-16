// import Navbar from '@/components/ui/Navbar/Navbar';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/ui/Navbar/Navbar'), {
  ssr: false,
});

const TeamMemberHeader = () => {
  const items = [
    { key: '1', label: 'My Profile', href: '/team-member/my-profile' },
    { key: '2', label: 'Dashboard', href: '/team-member/dashboard' },
  ];
  return <Navbar items={items} hasSider />;
};

export default TeamMemberHeader;
