import cn from 'classnames';
import { ListItemProps } from './ListItem.props.ts';
import styles from './ListItem.module.css';

function ListItem({ children, className, ...props }: ListItemProps) {
  const cl = cn(styles['li'], className);

  return (
    <li {...props} className={cl}>
      {children}
    </li>
  );
}

export default ListItem;
