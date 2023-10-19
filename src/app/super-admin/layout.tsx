'use client';

import HCLoading from '@/components/ui/Loading/HCLoading';
import SuperAdminHeader from '@/components/view/headers/SuperAdminHeader';

import SuperAdminSidebar from '@/components/view/sidebars/SuperAdminSidebar';
import { authKey } from '@/constants/global';
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from '@/services/auth.service';
import { IChildrenNode } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function SuperAdminLayoutPage({ children }: IChildrenNode) {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const { role } = getUserInfo() as any;
  const [isLoading, setIsLoading] = useState(false);

  if (role !== 'super_admin') {
    removeUserInfo(authKey);
    router.push('/signin');
  }

  useEffect(() => {
    if (!isUserLoggedIn || role !== 'super_admin') {
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
      <SuperAdminHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <SuperAdminSidebar>{children}</SuperAdminSidebar>
      </div>
    </div>
  );
}

export default SuperAdminLayoutPage;
