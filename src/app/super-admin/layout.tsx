import { IChildrenNode } from '@/types';

function SuperAdminLayoutPage({ children }: IChildrenNode) {
  return (
    <div>
      <h1>This is super admin layout page</h1>
      {children}
    </div>
  );
}

export default SuperAdminLayoutPage;
