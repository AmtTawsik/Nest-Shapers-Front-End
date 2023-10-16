'use client';

import PublicHeader from '@/components/view/headers/PublicHeader';
import { IChildrenNode } from '@/types';

function PublicLayout({ children }: IChildrenNode) {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
}

export default PublicLayout;
