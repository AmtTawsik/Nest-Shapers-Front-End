import TeamMemberHeader from '@/components/view/headers/TeamMemberHeader';
import { IChildrenNode } from '@/types';

function TeamMemberLayoutPage({ children }: IChildrenNode) {
  return (
    <div>
      <TeamMemberHeader />
      {children}
    </div>
  );
}

export default TeamMemberLayoutPage;
