import { ComponentProps } from 'react';

export interface ImageProps extends ComponentProps<'img'> {
  className: string;
  width: string;
  height: string;
  src: string;
  alt: string;
}
