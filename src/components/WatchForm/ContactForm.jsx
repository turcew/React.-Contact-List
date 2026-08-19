import "./ContactForm.css";

import {
  editContact,
  delContact,
  addContact,
  clearCurrentContact,
} from "../../store/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const emptyContact = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[\d\s\-()]{7,20}$/, "The phone number is incorrect")
    .required("Phone is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const currentContact = useSelector(
    (state) => state.contactList.currentContact,
  );

  const onFormSubmit = (values, { resetForm }) => {
    if (!values.id) {
      dispatch(addContact(values));
    } else {
      dispatch(editContact(values));
    }
    dispatch(clearCurrentContact());
    resetForm({ values: emptyContact });
  };

  const handleNew = (resetForm) => {
    dispatch(clearCurrentContact());
    resetForm({ values: emptyContact });
  };

  const handleDelete = (id, resetForm) => {
    if (!id) return;
    dispatch(delContact(id));
    dispatch(clearCurrentContact());
    resetForm({ values: emptyContact });
  };

  return (
    <Formik
      initialValues={currentContact?.id ? currentContact : emptyContact}
      enableReinitialize
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {({ resetForm, values, setFieldValue }) => (
        <Form className="container" id="Form">
          <div className="area">
            <Field
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstName"
            />
            <button
              type="button"
              className="btn"
              onClick={() => setFieldValue("firstName", "")}
            >
              X
            </button>
          </div>
          <ErrorMessage name="firstName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <div className="area">
            <Field
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastName"
            />
            <button
              type="button"
              className="btn"
              onClick={() => setFieldValue("lastName", "")}
            >
              X
            </button>
          </div>
          <ErrorMessage name="lastName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <div className="area">
            <Field type="email" name="email" id="email" placeholder="email" />
            <button
              type="button"
              className="btn"
              onClick={() => setFieldValue("email", "")}
            >
              X
            </button>
          </div>
          <ErrorMessage name="email">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <div className="area">
            <Field type="text" name="phone" id="phone" placeholder="phone" />
            <button
              type="button"
              className="btn"
              onClick={() => setFieldValue("phone", "")}
            >
              X
            </button>
          </div>
          <ErrorMessage name="phone">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <div className="btns">
            <button
              className="btn1"
              type="button"
              onClick={() => handleNew(resetForm)}
            >
              New
            </button>

            <button className="btn1" type="submit">
              Save
            </button>

            {values.id && (
              <button
                className="btn1"
                type="button"
                onClick={() => handleDelete(values.id, resetForm)}
              >
                Delete
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
