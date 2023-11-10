import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.css';

function Register({ fields, onSubmit, customClass, validationRules, customLabels }) {
    const [formState, setFormState] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
        // Optional: Validation logic here
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formState);
        }
    };

    const validateForm = () => {
        // Implement validation logic based on validationRules
        // Update errors state accordingly
    };

    return (
        <div className={`ctn-register ${customClass}`}>
            <form className='form-register' onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} className={`ctn-${field.name}`}>
                        <label>{customLabels[field.name] || field.label}</label>
                        <input
                            className={`input-${field.name}`}
                            name={field.name}
                            type={field.type}
                            value={formState[field.name] || ''}
                            onChange={handleChange}
                            autoComplete={field.autoComplete}
                        // Other necessary props
                        />
                        {/* Error display logic here */}
                    </div>
                ))}
                <input type='submit' className='button-register' />
            </form>
        </div>
    );
}

Register.propTypes = {
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    customClass: PropTypes.string,
    validationRules: PropTypes.object,
    customLabels: PropTypes.object,
};

export default Register;