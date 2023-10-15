'use client';

import { store } from '@/redux/store';

import { IChildrenNode } from '@/types';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from './AntdRegistry';

function Providers({ children }: IChildrenNode) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
}

export default Providers;
