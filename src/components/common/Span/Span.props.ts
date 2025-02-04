import { ComponentProps, ReactNode } from 'react';

export interface SpanProps extends ComponentProps<'span'> {
  children: ReactNode;
}
