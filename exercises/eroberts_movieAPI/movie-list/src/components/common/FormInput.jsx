import { forwardRef } from 'react';
import './FormInput.css';

const FormInput = forwardRef(({ label, name, value, onChange, ...props }, ref) => {
    return (
        <>
            <label className="form-label" htmlFor={name}>{label}</label>
            <input
                ref={ref}  // assign forwarded ref here
                className="form-input"
                type="text" 
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                {...props}
            />
        </>
    );
});

export default FormInput;