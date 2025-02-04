import cn from 'classnames';
import { NavigationProps } from './Navigation.props.ts';
import styles from './Navigation.module.css';

function Navigation({ children, className, ...props }: NavigationProps) {
  const cl = cn(styles['nav'], className);

  return (
    <nav {...props} className={cl}>
      {children}
    </nav>
  );
}

export default Navigation;
