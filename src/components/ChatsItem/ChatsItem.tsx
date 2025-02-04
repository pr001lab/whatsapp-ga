import styles from './ChatsItem.module.css';
import { ChatsItemProps } from './ChatsItem.props.ts';
import cn from 'classnames';
import { LabelsMenu } from '../../constant.ts';
import Division from '../common/Division/Division.tsx';
import ListItem from '../common/ListItem/ListItem.tsx';
import Image from '../common/Image/Image.tsx';
import Paragraph from '../common/Paragraph /Paragraph .tsx';

function ChatsItem({ className, ...props }: ChatsItemProps) {
  const cl = cn(styles['chats-item'], className);

  return (
    <ListItem className={cl} {...props}>
      <Image
        className={styles['chats-item__avatar']}
        width='49'
        height='49'
        src={'/user-avatar-default.svg'}
        alt={LabelsMenu.Profile}
      />
      <Division className={styles['chats-item__content']}>
        <Division className={styles['chats-item__content-title']}>
          <Paragraph className={styles['content-title__text']}>
            Иван Иванов
          </Paragraph>
          <Paragraph className={styles['content-title__data']}>18:45</Paragraph>
        </Division>
        <Paragraph className={styles['chats-item__content-message']}>
          Ок)
        </Paragraph>
      </Division>
    </ListItem>
  );
}

export default ChatsItem;
