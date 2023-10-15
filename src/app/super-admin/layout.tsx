import SuperAdminHeader from '@/components/view/headers/SuperAdminHeader';
import { IChildrenNode } from '@/types';

function SuperAdminLayoutPage({ children }: IChildrenNode) {
  return (
    <div>
      <SuperAdminHeader />
      {children}
    </div>
  );
}

export default SuperAdminLayoutPage;
