import {
  editContact,
  delContact,
  addContact,
  clearCurrentContact,
} from "../../store/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextField, Button, Paper, Stack, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        resetForm,
        isValid,
      }) => (
        <Form>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              maxWidth: 420,
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Stack direction="row" spacing={1} alignitems="flex-start">
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <IconButton
                size="small"
                onClick={() => setFieldValue("firstName", "")}
                disabled={!values.firstName}
                sx={{ mt: 1 }}
                aria-label="clear first name"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={1} alignitems="flex-start">
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <IconButton
                size="small"
                onClick={() => setFieldValue("lastName", "")}
                disabled={!values.lastName}
                sx={{ mt: 1 }}
                aria-label="clear last name"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={1} alignitems="flex-start">
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <IconButton
                size="small"
                onClick={() => setFieldValue("email", "")}
                disabled={!values.email}
                sx={{ mt: 1 }}
                aria-label="clear email"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={1} alignitems="flex-start">
              <TextField
                name="phone"
                label="Phone"
                variant="outlined"
                fullWidth
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
              <IconButton
                size="small"
                onClick={() => setFieldValue("phone", "")}
                disabled={!values.phone}
                sx={{ mt: 1 }}
                aria-label="clear phone"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifycontent="center"
              sx={{ mt: 1 }}
            >
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => handleNew(resetForm)}
              >
                New
              </Button>

              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                disabled={!isValid}
              >
                Save
              </Button>

              {values.id && (
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(values.id, resetForm)}
                >
                  Delete
                </Button>
              )}
            </Stack>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
