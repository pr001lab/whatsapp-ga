import Header from '../common/Header/Header.tsx';
import Footer from '../common/Footer/Footer.tsx';
import Button from '../common/Button/Button.tsx';
import { LabelsMenu } from '../../constant.ts';
import SVGIcon from '../common/SVGIcon/SVGIcon.tsx';
import FormFormik from '../common/FormFormik/FormFormik.tsx';
import InputFormik from '../common/InputFormik/InputFormik.tsx';
import Section from '../common/Section/Section.tsx';
import MessagesList from '../MessagesList/MessagesList.tsx';
import Heading from '../common/Heading/Heading.tsx';
import styles from './Messages.module.css';
import Division from '../common/Division/Division.tsx';
import Image from '../common/Image/Image.tsx';
import Paragraph from '../common/Paragraph /Paragraph .tsx';
import ButtonFormik from '../common/ButtonFormik/ButtonFormik.tsx';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import { loadState } from '../../utils/utils.tsx';

const validate = withZodSchema(
  z.object({
    message: z.string().min(1),
  }),
);

function Messages() {
  const localStorage = loadState<{
    apiUrl: string;
    idInstance: string;
    apiTokenInstance: string;
    phone: string;
  }>('green-api');

  return (
    <Section className={styles['messages']}>
      <Heading level={'h2'} className={'visually-hidden'}>
        Messages
      </Heading>
      <Header className={styles['header']}>
        <Division className={styles['header-author']}>
          <Image
            className={styles['header-author__avatar']}
            width='40'
            height='40'
            src={'/user-avatar-default.svg'}
            alt={LabelsMenu.Profile}
          />
          <Paragraph className='header-author__name'>
            {localStorage?.phone}
          </Paragraph>
        </Division>
        <Division className={styles['header-buttons']}>
          <Button
            className={`svg-icon-button ${styles['button-video']}`}
            title={'Load app for calls'}
          >
            <SVGIcon className={styles['svg-icon']} urlSvgIcon={'/video.svg'} />
            <Image
              className={styles['svg-icon-chevron']}
              width='10'
              height='10'
              src={'/chevron.svg'}
              alt={LabelsMenu.UploadApp}
            />
          </Button>
          <Button className={`svg-icon-button ${styles['button-search']}`}>
            <SVGIcon
              className={styles['svg-icon-search']}
              urlSvgIcon={'/search.svg'}
            />
          </Button>
          <Button className={'svg-icon-button'} title={LabelsMenu.ChatMenu}>
            <SVGIcon className={'svg-icon-button'} urlSvgIcon={'/menu.svg'} />
          </Button>
        </Division>
      </Header>
      <MessagesList />
      <Footer className={styles['footer']}>
        <Button className={'svg-icon-button'} title={LabelsMenu.Attach}>
          <SVGIcon className={'svg-icon-button'} urlSvgIcon={'/plus.svg'} />
        </Button>
        <FormFormik initialValues={{ message: '' }} validate={validate}>
          <Division className={styles['wrapper-input']}>
            <SVGIcon
              className={styles['svg-icon-input']}
              urlSvgIcon={'/face.svg'}
            />
            <InputFormik
              className={styles['form-input']}
              type='text'
              name={'message'}
              placeholder={'Enter message'}
              showError={false}
            />
          </Division>
          <ButtonFormik
            className={'svg-icon-button'}
            title={LabelsMenu.Microphone}
            showError={false}
            type='submit'
          >
            {/*<SVGIcon*/}
            {/*  className={'svg-icon-button'}*/}
            {/*  urlSvgIcon={'/microphone.svg'}*/}
            {/*/>*/}
            <SVGIcon className={'svg-icon-button'} urlSvgIcon={'/send.svg'} />
          </ButtonFormik>
        </FormFormik>
      </Footer>
    </Section>
  );
}

export default Messages;
