import styles from './InputFormik.module.css';
import { InputFormikProps } from './InputFormik.props.ts';
import { useField } from 'formik';

function InputFormik({ label, showError = true, ...props }: InputFormikProps) {
  const [field, meta] = useField(props);

  return (
    <>
      {label && <label>{label}</label>}
      <input {...field} {...props} />
      {showError && meta.touched && meta.error ? (
        <div className={styles['input-error']}>{meta.error}</div>
      ) : null}
    </>
  );
}

export default InputFormik;
