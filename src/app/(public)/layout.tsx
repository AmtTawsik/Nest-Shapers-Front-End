import { IChildrenNode } from '@/types';

function PublicLayout({ children }: IChildrenNode) {
  return (
    <div>
      <h1>This is public layout page</h1>
      {children}
    </div>
  );
}

export default PublicLayout;
