import styles from './MessagesList.module.css';
import { range } from '../../utils/utils.tsx';
import ListItem from '../common/ListItem/ListItem.tsx';
import Paragraph from '../common/Paragraph /Paragraph .tsx';
import List from '../common/List/List.tsx';
import Span from '../common/Span/Span.tsx';

function MessagesList() {
  return (
    <List className={styles['messages-list']}>
      {range(0, 10, 1).map((item) => (
        <>
          <ListItem className={`${styles['messages-list__item-author']}`}>
            <Paragraph className={styles['message__text']}>
              Lorem ipsum dolor sit amet.
            </Paragraph>
            <Span className={styles['message__time']}>12:05</Span>
          </ListItem>
          <ListItem className={`${styles['messages-list__item-author']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
            <Span className={styles['message__time']}>12:06</Span>
          </ListItem>
          <ListItem className={styles['messages-list__item']}>
            Lorem ipsum dolor sit amet.{' '}
            <Span className={styles['message__time']}>12:16</Span>
          </ListItem>
          <ListItem className={styles['messages-list__item']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
            <Span className={styles['message__time']}>12:18</Span>
          </ListItem>
        </>
      ))}
    </List>
  );
}

export default MessagesList;
