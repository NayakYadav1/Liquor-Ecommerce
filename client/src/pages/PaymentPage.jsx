// PaymentPage.jsx

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PaymentPage = () => {
    const history = useHistory();

    // Formik form submission and validation
    const formik = useFormik({
        initialValues: {
            username: '',
            phone: '',
            email: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            phone: Yup.string().required('Phone number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required')
        }),
        onSubmit: values => {
            // Handle form submission and redirection to Stripe payment page
            // You can integrate with Stripe here
            // For demonstration, let's just log the form values
            console.log(values);

            // Redirect to Stripe payment page
            // Replace '/payment' with the actual route to your Stripe payment page
            history.push('/payment');
        }
    });

    return (
        <div>
            <h1>Payment Page</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PaymentPage;
