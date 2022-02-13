import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Input from "./common/input.component";
import loginSchema from "../schema/login.schema";
import axios from "axios";

const Login = (props) => {
    async function handleLogin(data) {
        try {
            const response = await axios.post('http://localhost:5000/api/login', data);
            localStorage.setItem("access_token", response.data.access_token);
            window.location.href = "/";

        } catch(error) {
            console.log(error);
            alert('Error happened!');
        }
    }

    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
            <div className="card" style={{ width: " 25rem ", height: "auto" }}>
                <div className="card-body">
                <h5 className="d-flex flex-wrap justify-content-center">Login Form</h5>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={(values, actions) => {
                            handleLogin(values);
                            actions.setSubmitting(false);
                        }}
                        validationSchema={loginSchema}
                    >
                        {(formikprops) => {
                            return (
                                <Form onSubmit={formikprops.handleSubmit}>
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

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
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

export default Login;
