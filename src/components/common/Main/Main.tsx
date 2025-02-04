import { MainProps } from './Main.props.ts';
import styles from './Main.module.css';

function Main({ children, ...props }: MainProps) {
  return (
    <main {...props} className={styles['main']}>
      {children}
    </main>
  );
}

export default Main;
