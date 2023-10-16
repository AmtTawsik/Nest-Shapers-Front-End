'use client';

import HCLoading from '@/components/ui/Loading/HCLoading';
import TeamMemberHeader from '@/components/view/headers/TeamMemberHeader';
import { getUserInfo, isLoggedIn } from '@/services/auth.service';
import { IChildrenNode } from '@/types';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function TeamMemberLayoutPage({ children }: IChildrenNode) {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();
  const { role } = getUserInfo() as any;
  const [isLoading, setIsLoading] = useState(false);

  if (role !== 'team_member') {
    router.push('/signin');
  }

  useEffect(() => {
    if (!isUserLoggedIn || role !== 'team_member') {
      router.push('/signin');
    }
    setIsLoading(true);
  }, [isUserLoggedIn, router, role]);

  if (!isLoading) {
    return <HCLoading />;
  }
  return (
    <div>
      <TeamMemberHeader />
      {children}
    </div>
  );
}

export default TeamMemberLayoutPage;
