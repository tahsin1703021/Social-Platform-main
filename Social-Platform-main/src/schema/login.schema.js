import { string } from "yup";
import { object } from "yup";

const loginSchema = object().shape({
    email: string()
        .trim()
        .email('This field should be a valid email address.')
        .required('This field is required.'),
    password: string()
        .required('This field is required.')
});


export default loginSchema;