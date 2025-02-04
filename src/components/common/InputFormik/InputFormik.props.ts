import { ComponentProps } from 'react';

export interface InputFormikProps extends ComponentProps<'input'> {
  label?: string;
  name: string;
  placeholder?: string;
  showError?: boolean;
}
