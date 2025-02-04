import cn from 'classnames';
import { ImageProps } from './Image.props.ts';
import styles from './Image.module.css';

function Image({ children, className, ...props }: ImageProps) {
  const cl = cn(styles['image'], className);

  return (
    <img {...props} className={cl}>
      {children}
    </img>
  );
}

export default Image;
