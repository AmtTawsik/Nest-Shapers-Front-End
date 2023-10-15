import { IChildrenNode } from '@/types';
import CustomerHeader from '../../components/view/headers/CustomerHeader';

function CustomerLayout({ children }: IChildrenNode) {
  return (
    <div>
      <CustomerHeader />
      {children}
    </div>
  );
}

export default CustomerLayout;
