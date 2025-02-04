import cn from 'classnames';
import { ParagraphProps } from './Paragraph .props.ts';
import styles from './Paragraph .module.css';

function Paragraph({ children, className, ...props }: ParagraphProps) {
  const cl = cn(styles['p '], className);

  return (
    <p {...props} className={cl}>
      {children}
    </p>
  );
}

export default Paragraph;
