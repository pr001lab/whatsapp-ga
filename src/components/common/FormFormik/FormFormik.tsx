import { Form, Formik } from 'formik';
import { FormFormikProps } from './FormFormik.props.ts';
import { saveState } from '../../../utils/utils.tsx';

const FormFormik = ({ initialValues, validate, children }: FormFormikProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values) => {
        console.log('values :', values);
        saveState(values, 'green-api');
        // saveState('', 'green-api');
      }}
    >
      {() => {
        return (
          <>
            <Form>{children}</Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormFormik;
