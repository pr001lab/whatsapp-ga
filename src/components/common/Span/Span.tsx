import styles from './Span.module.css';
import { SpanProps } from './Span.props.ts';
import cn from 'classnames';

function Span({ children, className, ...props }: SpanProps) {
  const cl = cn(styles['span'], className);

  return (
    <span {...props} className={cl}>
      {children}
    </span>
  );
}

export default Span;
