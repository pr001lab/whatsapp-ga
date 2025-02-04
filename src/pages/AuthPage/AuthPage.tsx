import Division from '../../components/common/Division/Division.tsx';
import FormFormik from '../../components/common/FormFormik/FormFormik.tsx';
import Heading from '../../components/common/Heading/Heading.tsx';
import Paragraph from '../../components/common/Paragraph /Paragraph .tsx';
import { LabelsMenu } from '../../constant.ts';
import { withZodSchema } from 'formik-validator-zod';
import { z } from 'zod';
import styles from './AuthPage.module.css';
import Span from '../../components/common/Span/Span.tsx';
import InputFormik from '../../components/common/InputFormik/InputFormik.tsx';
import ButtonFormik from '../../components/common/ButtonFormik/ButtonFormik.tsx';

const validate = withZodSchema(
  z.object({
    apiUrl: z.string().min(1),
    idInstance: z.string().min(1),
    apiTokenInstance: z.string().min(1),
  }),
);

const AuthPage = () => {
  return (
    <Division className={styles['auth-page']}>
      <Division className={styles['logo']}>
        <img src={'/logo.svg'} alt={LabelsMenu.EncryptionProtection} />
        <img src={'/logo-name.svg'} alt={LabelsMenu.EncryptionProtection} />
      </Division>
      <FormFormik
        initialValues={{ apiUrl: '', idInstance: '', apiTokenInstance: '' }}
        validate={validate}
      >
        <Heading level={'h1'}>Enter your Green-Api details</Heading>
        <Paragraph className={styles['form-text']}>
          You can get the necessary information on the service Green-Api.com.
        </Paragraph>
        <Division className={`${styles['wrapper-input']} ${styles['apiUrl']}`}>
          <Span>apiUrl</Span>
          <InputFormik
            className={styles['form-input']}
            type='text'
            name={'apiUrl'}
            showError={false}
          />
        </Division>
        <Division
          className={`${styles['wrapper-input']} ${styles['idInstance']}`}
        >
          <Span>idInstance</Span>
          <InputFormik
            className={styles['form-input']}
            type='text'
            name={'idInstance'}
            showError={false}
          />
        </Division>
        <Division
          className={`${styles['wrapper-input']} ${styles['apiTokenInstance']}`}
        >
          <Span>apiTokenInstance</Span>
          <InputFormik
            className={styles['form-input']}
            type='text'
            name={'apiTokenInstance'}
            showError={false}
          />
        </Division>
        <ButtonFormik type='submit' className={styles['form-button']}>
          Forward
        </ButtonFormik>
      </FormFormik>
      <Paragraph className={styles['text-comment']}>
        <img src={'/lock.svg'} alt={LabelsMenu.EncryptionProtection} />
        Your private messages are protected by end-to-end encryption
      </Paragraph>
    </Division>
  );
};

export default AuthPage;
