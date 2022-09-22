import React from 'react';

const Input = ({
  field: {
    label,
    name,
    type,
    placeholder,
    config,
  },
  register,
  id,
  error,
  ...rest
}) => {
  return (
    <div>
        <label htmlFor={id}>{label}{config.required.value ? <span>*</span> : ""}</label>
        <input className={`u-fullwidth ${error && "error-input"}`} type={type} placeholder={placeholder} id={id} name={name} {...register(name, config)} {...rest} />
        {error && <div className="error-status">{error.message}</div>}
    </div>
  )
}

export default Input;