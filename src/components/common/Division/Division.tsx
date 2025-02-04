import cn from 'classnames';
import { DivisionProps } from './Division.props.ts';
import styles from './Division.module.css';

function Division({ children, className, ...props }: DivisionProps) {
  const cl = cn(styles['div'], className);

  return (
    <div {...props} className={cl}>
      {children}
    </div>
  );
}

export default Division;
