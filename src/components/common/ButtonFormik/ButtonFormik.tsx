import { useFormikContext } from 'formik';
import { ButtonFormikProps } from './ButtonFormik.props.ts';
import Division from '../Division/Division.tsx';
import cn from 'classnames';
import styles from '../ButtonFormik/ButtonFormik.module.css';

function ButtonFormik({
  children,
  onClick,
  showError = true,
  className,
  ...props
}: ButtonFormikProps) {
  const formikContext = useFormikContext();
  const cl = cn(styles['button'], className);

  return (
    <>
      {showError && !formikContext.isValid && formikContext.submitCount ? (
        <Division className={styles['form-error']}>
          Some fields are invalid.
        </Division>
      ) : null}
      <button {...props} onClick={onClick} className={cl}>
        {children}
      </button>
    </>
  );
}

export default ButtonFormik;
