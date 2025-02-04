import styles from './ChatsList.module.css';
import { ChatsListProps } from './ChatsList.props.ts';
import cn from 'classnames';
import { LabelsMenu } from '../../constant.ts';
import ChatsItem from '../ChatsItem/ChatsItem.tsx';
import { range } from '../../utils/utils.tsx';
import List from '../common/List/List.tsx';
import ListItem from '../common/ListItem/ListItem.tsx';
import Image from '../common/Image/Image.tsx';
import Division from '../common/Division/Division.tsx';

function ChatsList({ className, ...props }: ChatsListProps) {
  const cl = cn(styles['chats-list'], className);

  return (
    <List className={cl} {...props}>
      <ListItem className={styles['chats-item']}>
        <Image
          className={styles['chats-item__archive']}
          width='24'
          height='24'
          src={'/archive.svg'}
          alt={LabelsMenu.Archive}
        />
        <Division className={styles['chats-item__content']}>В архиве</Division>
      </ListItem>
      {range(0, 15, 1).map((item) => (
        <ChatsItem key={item} />
      ))}
    </List>
  );
}

export default ChatsList;
