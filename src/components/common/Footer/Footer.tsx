import { FooterProps } from './Footer.props.ts';
import styles from './Footer.module.css';
import cn from 'classnames';

function Footer({ children, className, ...props }: FooterProps) {
  const cl = cn(styles['footer'], className);

  return (
    <footer {...props} className={cl}>
      {children}
    </footer>
  );
}

export default Footer;
