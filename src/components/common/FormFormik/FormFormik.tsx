import { Form, Formik } from 'formik';
import { FormFormikProps } from './FormFormik.props.ts';
import { saveState } from '../../../utils/utils.tsx';
import { postMessage } from '../../../store/message.slice.ts';
import { AppDispatch } from '../../../store/store.ts';
import { useDispatch } from 'react-redux';

const FormFormik = ({
  initialValues,
  validate,
  className,
  children,
}: FormFormikProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if ('message' in values) {
          console.log('values :', values);
          const message = values.message;
          dispatch(postMessage({ message }));
          resetForm();
        } else {
          saveState(values, 'green-api');
          window.location.reload();
        }
      }}
    >
      {() => {
        return (
          <>
            <Form className={className}>{children}</Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormFormik;
