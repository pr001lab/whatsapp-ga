import { ComponentProps, ReactNode } from 'react';

export interface ButtonFormikProps extends ComponentProps<'button'> {
  children: ReactNode;
  showError?: boolean;
}
