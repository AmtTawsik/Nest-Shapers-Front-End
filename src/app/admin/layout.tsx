'use client';

import HCLoading from '@/components/ui/Loading/HCLoading';
import { authKey } from '@/constants/global';
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from '@/services/auth.service';
import { IChildrenNode } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '../../components/view/headers/AdminHeader';
import AdminSidebar from '../../components/view/sidebars/AdminSidebar';

function AdminLayout({ children }: IChildrenNode) {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const { role } = getUserInfo() as any;
  const [isLoading, setIsLoading] = useState(false);

  if (role !== 'admin') {
    removeUserInfo(authKey);
    router.push('/signin');
  }

  useEffect(() => {
    if (!isUserLoggedIn || role !== 'admin') {
      removeUserInfo(authKey);
      router.push('/signin');
    }
    setIsLoading(true);
  }, [isUserLoggedIn, router, role]);

  if (!isLoading) {
    return <HCLoading />;
  }
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
