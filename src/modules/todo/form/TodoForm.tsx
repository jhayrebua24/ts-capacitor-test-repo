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
import { useAddTodo } from "modules/todo/hooks";
import * as yup from "yup";

function TodoForm(): JSX.Element {
  const [submit, isLoading] = useAddTodo();

  const onSubmit = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<any>,
  ) => {
    //
    await submit({
      ...values,
      userId: Math.floor(Math.random() * 999999),
      id: Math.floor(Math.random() * 999999),
    });
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
          title: "",
          completed: false,
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          title: yup.string().required(),
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
              <label htmlFor="name">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />
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
