import { ErrorMessage } from "formik";

const FieldInput = (props) => {
    const { type, id, name, className, label } = props;
    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input type={type} className={className} id={id} name={name} />
        </>
    );
};

export default FieldInput;
