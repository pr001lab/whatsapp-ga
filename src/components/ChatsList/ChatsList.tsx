import styles from './ChatsList.module.css';
import { ChatsListProps } from './ChatsList.props.ts';
import cn from 'classnames';
import { LabelsMenu } from '../../constant.ts';
import ChatsItem from '../ChatsItem/ChatsItem.tsx';
import List from '../common/List/List.tsx';
import ListItem from '../common/ListItem/ListItem.tsx';
import Image from '../common/Image/Image.tsx';
import Division from '../common/Division/Division.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { IMessageProps } from '../../types/message.ts';
import { getLastChats } from '../../utils/utils.tsx';

function ChatsList({ className, ...props }: ChatsListProps) {
  const cl = cn(styles['chats-list'], className);
  const { items: messages } = useSelector((state: RootState) => state.message);
  const lastChats: IMessageProps[] = getLastChats(messages);

  return (
    <List className={cl} {...props}>
      <ListItem className={styles['chats-item']}>
        <Image
          className={styles['chats-item__archive']}
          width='24'
          height='24'
          src={'archive.svg'}
          alt={LabelsMenu.Archive}
        />
        <Division className={styles['chats-item__content']}>Archived</Division>
      </ListItem>
      {lastChats.map((lastChat) => (
        <ChatsItem key={lastChat.chatId} {...lastChat} />
      ))}
    </List>
  );
}

export default ChatsList;
