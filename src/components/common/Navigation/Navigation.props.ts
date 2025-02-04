import { ComponentProps, ReactNode } from 'react';

export interface NavigationProps extends ComponentProps<'nav'> {
  children: ReactNode;
}
