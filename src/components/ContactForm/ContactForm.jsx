import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ProfileValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name can't exceed 50 characters"),
  tel: Yup.string()
    .required("Number is required")
    .matches(
      /^\+?([0-9]{1,4})?\s?-?([0-9]{3})\s?-?([0-9]{3,5})\s?-?([0-9]{3,5})$/,
      "Invalid phone number format"
    )
    .min(3, "Number must be at least 3 characters")
    .max(15, "Number can't exceed 15 characters"),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({
      id: Date.now(),
      name: values.username,
      number: values.tel,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        tel: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      {() => (
        <Form className={css.contactForm}>
          <label className={css.formLabel}>
            <span>Name</span>
            <Field type="text" name="username" />
          </label>
          <ErrorMessage name="username" component="div" className={css.error} />

          <label className={css.formLabel}>
            <span>Number</span>
            <Field type="tel" name="tel" />
          </label>
          <ErrorMessage name="tel" component="div" className={css.error} />

          <button type="submit" className={css.btnAdd}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
