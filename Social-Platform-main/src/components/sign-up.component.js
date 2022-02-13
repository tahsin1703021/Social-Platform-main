import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import signUpSchema from "../schema/signup.schema";

const SignUp = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="card" style={{ width: " 25rem ", height: "auto" }}>
                <div className="card-body">
                    <h5 className="d-flex flex-wrap justify-content-center">Sign-Up Form</h5>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            dateOfBirth: "",
                            gender: "Please select one",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            actions.setSubmitting(false);
                        }}
                        validationSchema={signUpSchema}
                    >
                        {(formikprops) => {
                            return (
                                <Form onSubmit={formikprops.handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="firstName"
                                            className="form-label"
                                        >
                                            First Name
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="firstName" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="lastName"
                                            className="form-label"
                                        >
                                            Last Name
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="lastName" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="dateOfBirth"
                                            className="form-label"
                                        >
                                            Birth Date
                                        </label>
                                        <Field
                                            type="date"
                                            className="form-control"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="dateOfBirth" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="gender"
                                            className="form-label"
                                        >
                                            Gender
                                        </label>
                                        <Field className="form-control" name="gender" id="gender" as="select">
                                            <option>Click Here to Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Field>

                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="dateOfBirth" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email Address
                                        </label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="password"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="password" />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="form-label"
                                        >
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                        />
                                        <div className="invalid-feedback d-block">
                                            <ErrorMessage name="confirmPassword" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Sign-Up
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
