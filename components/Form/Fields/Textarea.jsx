import React from 'react'

const Textarea = ({
  field: {
    name,
    label,
    placeholder,
    config
  },
  register,
  id,
  error,
  ...rest
}) => {
  return (
    <div>
        <label htmlFor={id}>{label}{config.required.value ? <span>*</span> : ""}</label>
        <textarea className={`u-fullwidth ${error && "error-input"}`} placeholder={placeholder} id={id} name={name} {...register(name, config)} {...rest}></textarea>
        {error && <div className="error-status">{error.message}</div>}
    </div>
  )
}

export default Textarea