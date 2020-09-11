import React from 'react';
import { useForm } from 'react-hook-form';

function InputComponent({label,name,ref}) {
    const { register, handleSubmit, errors,watch } = useForm();
    return (
        <div className="mb-4">
            <label className="text-gray-700">{label}</label>
            <input autoComplete="off" type="text" className="form-control mt-1" placeholder={label} name={name} ref={ref}
            />
        </div>
    );
}

export default InputComponent;