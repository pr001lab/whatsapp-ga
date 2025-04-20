import styles from './ChatsItem.module.css';
import cn from 'classnames';
import { LabelsMenu } from '../../constant.ts';
import Division from '../common/Division/Division.tsx';
import ListItem from '../common/ListItem/ListItem.tsx';
import Image from '../common/Image/Image.tsx';
import Paragraph from '../common/Paragraph /Paragraph .tsx';
import { IMessageProps } from '../../types/message.ts';
import { format } from 'fecha';

function ChatsItem({ chatId, message, date }: IMessageProps) {
  const cl = cn(styles['chats-item']);

  return (
    <ListItem className={cl}>
      <Image
        className={styles['chats-item__avatar']}
        width='49'
        height='49'
        src={'user-avatar-default.svg'}
        alt={LabelsMenu.Profile}
      />
      <Division className={styles['chats-item__content']}>
        <Division className={styles['chats-item__content-title']}>
          <Paragraph className={styles['content-title__text']}>
            {chatId}
          </Paragraph>
          <Paragraph className={styles['content-title__data']}>
            <sub>{date && format(new Date(JSON.parse(date)), 'shortTime')}</sub>
          </Paragraph>
        </Division>
        <Paragraph className={styles['chats-item__content-message']}>
          {message}
        </Paragraph>
      </Division>
    </ListItem>
  );
}

export default ChatsItem;
