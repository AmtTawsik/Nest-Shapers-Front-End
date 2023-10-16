'use client';

import HCLoading from '@/components/ui/Loading/HCLoading';
import CustomerSidebar from '@/components/view/sidebars/CustomerSidebar';
import { authKey } from '@/constants/global';
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from '@/services/auth.service';
import { IChildrenNode } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomerHeader from '../../components/view/headers/CustomerHeader';

function CustomerLayout({ children }: IChildrenNode) {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const { role } = getUserInfo() as any;
  const [isLoading, setIsLoading] = useState(false);

  if (role !== 'customer') {
    removeUserInfo(authKey);
    router.push('/signin');
  }

  useEffect(() => {
    if (!isUserLoggedIn || role !== 'customer') {
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
      <CustomerHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <CustomerSidebar>{children}</CustomerSidebar>
      </div>
    </div>
  );
}

export default CustomerLayout;
