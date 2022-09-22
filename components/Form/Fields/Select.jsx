import React from 'react'

const Select = ({
    field: {
        name, 
        label,
        placeholder,
        options,
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
          <div className="ss-custom-select">
              <select className={`u-fullwidth ${error && "error-input"}`} id={id} name={name} placeholder={placeholder} {...register(name, config)} {...rest}>
                    {options && options.map((opt, index) => (
                        <option value={opt} key={opt + index}>{opt}</option>
                    ))}
              </select>
          </div>
            {error && <div className="error-status">{error.message}</div>}
      </div>
  );
}

export default Select