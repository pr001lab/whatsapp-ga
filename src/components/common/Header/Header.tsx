import { HeaderProps } from './Header.props.ts';
import styles from './Header.module.css';
import cn from 'classnames';

function Header({ children, className, ...props }: HeaderProps) {
  const cl = cn(styles['header'], className);

  return (
    <header {...props} className={cl}>
      {children}
    </header>
  );
}

export default Header;
