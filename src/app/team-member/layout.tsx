import { IChildrenNode } from '@/types';

function TeamMemberLayoutPage({ children }: IChildrenNode) {
  return (
    <div>
      <h1>This is team member layout page</h1>
      {children}
    </div>
  );
}

export default TeamMemberLayoutPage;
