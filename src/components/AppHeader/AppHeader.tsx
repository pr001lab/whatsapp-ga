import AppMenu from '../AppMenu/AppMenu.tsx';
import Header from '../common/Header/Header.tsx';
import styles from './Appheader.module.css';

const AppHeader = () => {
  return (
    <Header className={styles['app-header']}>
      <AppMenu />
    </Header>
  );
};

export default AppHeader;
