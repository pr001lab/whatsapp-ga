import styles from './Chats.module.css';
import Header from '../common/Header/Header.tsx';
import Button from '../common/Button/Button.tsx';
import FormFormik from '../common/FormFormik/FormFormik.tsx';
import InputFormik from '../common/InputFormik/InputFormik.tsx';
import { FilterEnum, LabelsMenu } from '../../constant.ts';
import Section from '../common/Section/Section.tsx';
import Heading from '../common/Heading/Heading.tsx';
import SVGIcon from '../common/SVGIcon/SVGIcon.tsx';
import ChatsList from '../ChatsList/ChatsList.tsx';
import Division from '../common/Division/Division.tsx';
import { CgLogOut } from 'react-icons/cg';
import { saveState } from '../../utils/utils.tsx';

function Chats() {
  return (
    <Section className={styles['chats']}>
      <Header className={styles['header']}>
        <Heading level={'h2'}>Chats</Heading>
        <Division className={styles['buttons']}>
          <Button className={'svg-icon-button'} title={LabelsMenu.AddNewChat}>
            <SVGIcon urlSvgIcon={'new-chat.svg'} />
          </Button>
          <Button
            onClick={() => {
              saveState('', 'green-api');
              window.location.reload();
            }}
            title={LabelsMenu.ChatMenu}
            style={{ background: 'transparent', border: 'none' }}
          >
            <CgLogOut size={25} color={'rgb(134, 150, 160)'} />
          </Button>
        </Division>
      </Header>
      <FormFormik initialValues={{ search: '' }}>
        <Division className={styles['wrapper-input']}>
          <Button className={`svg-icon-button ${styles['button-search']}`}>
            <SVGIcon
              className={styles['svg-icon-search']}
              urlSvgIcon={'search.svg'}
            />
          </Button>
          <InputFormik
            className={styles['search-input']}
            type='text'
            name={'search'}
            placeholder={'Search'}
          />
        </Division>
      </FormFormik>
      <Division className={styles['filters']}>
        <Button className={`${styles['active']} ${styles['filter-button']}`}>
          {FilterEnum.All}
        </Button>
        <Button className={styles['filter-button']}>{FilterEnum.Unread}</Button>
        <Button className={styles['filter-button']}>
          {FilterEnum.Favorite}
        </Button>
        <Button className={styles['filter-button']}>{FilterEnum.Groups}</Button>
      </Division>
      <ChatsList />
    </Section>
  );
}

export default Chats;
