import * as React from 'react';
import { ComponentProps } from 'react';

export interface FormFormikProps extends ComponentProps<'input'> {
  children: React.ReactNode;
  initialValues: Record<string, any>;
  validate?: any;
}
