import { IChildrenNode } from '@/types';
import AdminHeader from '../../components/view/headers/AdminHeader';
import AdminSidebar from '../../components/view/sidebars/AdminSidebar';

function AdminLayout({ children }: IChildrenNode) {
  return (
    <div>
      <AdminHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <AdminSidebar>{children}</AdminSidebar>
      </div>
    </div>
  );
}

export default AdminLayout;
