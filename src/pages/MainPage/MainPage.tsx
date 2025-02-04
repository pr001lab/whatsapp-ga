import styles from './MainPage.module.css';
import Division from '../../components/common/Division/Division.tsx';
import Main from '../../components/common/Main/Main.tsx';
import AppHeader from '../../components/AppHeader/AppHeader.tsx';
import Heading from '../../components/common/Heading/Heading.tsx';
import Chats from '../../components/Chats/Chats.tsx';
import Messages from '../../components/Messages/Messages.tsx';

function MainPage() {
  return (
    <Division className={styles['main-page']}>
      <Division className={styles['page-app']}>
        <AppHeader />
        <Main>
          <Heading level={'h1'} className={'visually-hidden'}>
            WhatsApp
          </Heading>
          <Chats />
          <Messages />
        </Main>
      </Division>
    </Division>
  );
}

export default MainPage;
