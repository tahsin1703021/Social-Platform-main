import * as Yup from "yup";
import { string } from "yup";
import { object } from "yup";

const signUpSchema = object().shape({

    firstName: string()
        .matches(/^[aA-zZ\s]+$/, 'Please enter a valid name.')
        .max(30, 'First name should be at most 30 characters long.')
        .required('This field is required.'),

    lastName: string()
        .matches(/^[aA-zZ\s]+$/, 'Please enter a valid name.')
        .max(30, 'First name should be at most 30 characters long.')
        .required('This field is required.'),

    dateOfBirth: string()
        .required('This field is required.'),

    gender: string()
        .required('This field is required.'),

    email: string()
        .trim()
        .email('Please enter a valid email.')
        .required('This field is required.'),

    password: string()
        .min(6, 'Password should be at least 6 characters long.')
        .max(15, 'Password should be at most 15 characters long.')
        .required('This field is required.'),

    confirmPassword: string()
        .oneOf([Yup.ref('password'), null], 'Passwords mismatched')
        .required('This field is reuired.')
});


export default signUpSchema;