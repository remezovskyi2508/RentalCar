import React from 'react';
import css from './CarDetailLeft.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SmallButton } from '../SmallButton/SmallButton';
import clsx from 'clsx';

export const CarDetailLeft = ({ car }) => {
  console.log('CarDetaile :', car.id);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Select a date'),
    comment: Yup.string(),
  });
  return (
    <div>
      <div className={css.imageContainer}>
        <img src={car.img} alt={car.name} className={css.image} />
      </div>
      <div className={css.formContainer}>
        <h2>Book your car now</h2>
        <p className={css.descrDetail}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={{ name: '', email: '', date: '', comment: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Submitted:', values);
            resetForm();
          }}
        >
          <Form className={css.formWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.inputField}
            />
            <ErrorMessage name="name" component="div" className="error-text" />
            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={css.inputField}
            />
            <ErrorMessage name="email" component="div" className={css.errorText} />
            <Field
              type="text"
              name="date"
              placeholder="Booking date"
              className={css.inputField}
            />
            <ErrorMessage name="date" component="div" className="error-text" />
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={clsx(css.inputField, css.textArea)}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="error-text"
            />
            <SmallButton>Send</SmallButton>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
