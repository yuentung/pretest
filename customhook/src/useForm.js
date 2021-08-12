import { useState } from 'react';

const useForm = ({ initialValues, validation, onSubmit }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value, checked } = e.target;
        setValues(prevValues => {
            if (name === 'account' || name === 'password') {
                return {
                    ...prevValues,
                    [name]: value
                };
            } else if (name === 'rememberMe') {
                return {
                    ...prevValues,
                    [name]: checked
                };
            }
            return prevValues;
        });
    };

    const handleSubmit = () => {
        const errors = validation(values);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            onSubmit(values);
        }
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;