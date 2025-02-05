import { LabelsMenu } from '../../constant.ts';
import styles from './AppMenu.module.css';
import SVGIcon from '../common/SVGIcon/SVGIcon.tsx';
import Button from '../common/Button/Button.tsx';
import Division from '../common/Division/Division.tsx';
import Navigation from '../common/Navigation/Navigation.tsx';

function AppMenu() {
  return (
    <Navigation className={styles['app-menu']}>
      <Division className={styles['app-menu__services']}>
        <Button className={`svg-icon-button active`} title={LabelsMenu.Chats}>
          <SVGIcon className={'svg-icon'} urlSvgIcon={'/chats.svg'} />
        </Button>
        <Button className={'svg-icon-button'} title={LabelsMenu.Status}>
          <SVGIcon className={'svg-icon'} urlSvgIcon={'/status.svg'} />
        </Button>
        <Button className={'svg-icon-button'} title={LabelsMenu.Communities}>
          <SVGIcon className={'svg-icon'} urlSvgIcon={'/community.svg'} />
        </Button>
      </Division>
      <Division className={styles['app-menu__user']}>
        <Button className={'svg-icon-button'} title={LabelsMenu.Settings}>
          <SVGIcon className={'svg-icon'} urlSvgIcon={'/settings.svg'} />
        </Button>
        <Button className={'icon-button'} title={LabelsMenu.Profile}>
          <img src={'/user-avatar-default.svg'} alt={LabelsMenu.Profile} />
        </Button>
      </Division>
    </Navigation>
  );
}

export default AppMenu;
