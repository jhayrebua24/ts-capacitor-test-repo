/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProps,
  FormikValues,
  FormikHelpers,
} from "formik";
import { useAddTodo } from "todo/hooks";
import * as yup from "yup";

function TodoForm(): JSX.Element {
  const [submit, isLoading] = useAddTodo();

  const onSubmit = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<any>,
  ) => {
    //
    await submit(values);
    resetForm();
  };

  return (
    <div
      style={{
        marginBottom: 10,
        width: 400,
      }}
    >
      <Formik
        initialValues={{
          userId: 12312412,
          id: "123123",
          name: "",
          completed: false,
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
        })}
      >
        {({ handleSubmit }: FormikProps<any>) => (
          <Form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <Field name="completed" type="checkbox" />
              <label htmlFor="name">IS COMPLETED</label>
            </div>
            <button type="submit" disabled={isLoading}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TodoForm;
