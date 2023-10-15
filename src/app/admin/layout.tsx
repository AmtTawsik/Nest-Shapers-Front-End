import { IChildrenNode } from '@/types';
import AdminHeader from '../../components/view/headers/AdminHeader';

function AdminLayout({ children }: IChildrenNode) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}

export default AdminLayout;
