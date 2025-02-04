import { ButtonProps } from './Button.props.ts';
import cn from 'classnames';
import styles from '../Header/Header.module.css';

function Button({ children, onClick, className, ...props }: ButtonProps) {
  const cl = cn(styles['button'], className);

  return (
    <button {...props} onClick={onClick} className={cl}>
      {children}
    </button>
  );
}

export default Button;
