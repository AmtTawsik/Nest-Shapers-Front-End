import SuperAdminHeader from '@/components/view/headers/SuperAdminHeader';
import SuperAdminSidebar from '@/components/view/sidebars/SuperAdminSidebar';
import { IChildrenNode } from '@/types';

function SuperAdminLayoutPage({ children }: IChildrenNode) {
  return (
    <div>
      <SuperAdminHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <SuperAdminSidebar>{children}</SuperAdminSidebar>
      </div>
    </div>
  );
}

export default SuperAdminLayoutPage;
