import Sidebar from '@/components/ui/Sidebar/Sidebar';

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: '1', label: 'Dashboard', href: '/admin/dashboard' },
    { key: '2', label: 'Bookings', href: '/admin/bookings-list' },
    { key: '3', label: 'Users', href: '/admin/users' },
    { key: '5', label: 'Service Category', href: '/admin/service-category' },
    { key: '4', label: 'Service', href: '/admin/service' },
    { key: '6', label: 'Available Service', href: '/admin/available-service' },
    { key: '10', label: 'Slots for Services', href: '/admin/slot' },
    { key: '7', label: 'Upcoming Service', href: '/admin/upcoming-service' },
    // { key: '11', label: 'Specialization', href: '/admin/specialization' },
    { key: '8', label: 'Service Team', href: '/admin/ServiceTeam' },
    // { key: '9', label: 'Team Members', href: '/admin/team-member' },

    // { key: '12', label: 'User Notification', href: '/admin/user-notification' },
    // {
    //   key: '13',
    //   label: 'Team Notification',
    //   href: '/admin/teram-notification',
    // },
    { key: '14', label: 'Feedbacks', href: '/admin/feedback' },
    { key: '15', label: 'Review & Rating', href: '/admin/review-and-rating' },
    { key: '16', label: 'Blogs', href: '/admin/blog-post' },
    { key: '17', label: 'Faq', href: '/admin/faq' },
    // { key: '18', label: 'Featured In', href: '/admin/featuredin' },
    // { key: '19', label: 'Key Stats', href: '/admin/stat' },
    // { key: '20', label: 'Privacy Policy', href: '/admin/privacy-policy' },
    // { key: '21', label: 'Website Content', href: '/admin/website-content' },
    // { key: '22', label: 'Website Banners', href: '/admin/website-banner' },
    // { key: '23', label: 'Work Showcase', href: '/admin/work-showcase' },
    { key: '24', label: 'My Profile', href: '/admin/my-profile' },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
