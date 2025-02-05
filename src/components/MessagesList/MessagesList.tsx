import styles from './MessagesList.module.css';
import Paragraph from '../common/Paragraph /Paragraph .tsx';
import List from '../common/List/List.tsx';
import Span from '../common/Span/Span.tsx';
import { AppDispatch, RootState } from '../../store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'fecha';
import ListItem from '../common/ListItem/ListItem.tsx';
import { getMessage } from '../../store/message.slice.ts';
import { useEffect } from 'react';

function MessagesList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: messages } = useSelector((state: RootState) => state.message);
  // console.log('MessagesList');

  useEffect(() => {
    // const intervalId = setInterval(() => {
    dispatch(getMessage());
    // }, 30 * 1000);

    return () => {
      // clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <List className={styles['messages-list']}>
      {messages.map((message) => {
        const messagesListItem =
          'author' in message
            ? 'messages-list__item'
            : 'messages-list__item-author';

        return (
          <ListItem key={message.id} className={`${styles[messagesListItem]}`}>
            <Paragraph className={styles['message__text']}>
              {message.message}
            </Paragraph>
            <Span className={styles['message__time']}>
              <sub>
                {message.date &&
                  format(new Date(JSON.parse(message.date)), 'shortTime')}
              </sub>
            </Span>
          </ListItem>
        );
      })}
    </List>
  );
}

export default MessagesList;
