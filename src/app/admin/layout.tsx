import { IChildrenNode } from '@/types';

function AdminLayout({ children }: IChildrenNode) {
  return (
    <div>
      <h1>This is admin layout page</h1>
      {children}
    </div>
  );
}

export default AdminLayout;
