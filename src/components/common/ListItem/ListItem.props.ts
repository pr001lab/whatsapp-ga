import { ComponentProps, ReactNode } from 'react';

export interface ListItemProps extends ComponentProps<'li'> {
  children: ReactNode;
}
