'use client';

import AdminLayoutComponent from '@/components/admin/AdminLayoutComponent';
import { IChildrenNode } from '@/types';

function AdminLayout({ children }: IChildrenNode) {
  return <AdminLayoutComponent>{children}</AdminLayoutComponent>;
}

export default AdminLayout;
