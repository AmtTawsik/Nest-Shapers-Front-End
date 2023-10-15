import CustomerSidebar from '@/components/view/sidebars/CustomerSidebar';
import { IChildrenNode } from '@/types';
import CustomerHeader from '../../components/view/headers/CustomerHeader';

function CustomerLayout({ children }: IChildrenNode) {
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
