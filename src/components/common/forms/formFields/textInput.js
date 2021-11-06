import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const TextInput = ({ label, input, type, meta, describedby }) => {
  const { name } = input
  // const { delay, active, pristine, dirty, error, touched, children, invalid } = meta
  const { dirty, error, touched, invalid } = meta
  const hasError = invalid && !!touched
  const hasValue = !!dirty && !invalid
  const required = invalid

  // console.log(validate)

  return (
    <label
      htmlFor={name}
      className={hasError ? 'error' : undefined || hasValue ? 'touched' : undefined}
    >
      {label}
      {required && !hasValue && <span className="required">Required</span>}
      {hasError && <span className="error">{`is ${error}`}</span>}
      <span>
        <input
          type={type}
          id={name}
          required={required}
          aria-invalid={hasError && 'true'}
          aria-describedby={describedby && `Described by ${describedby}`}
          placeholder={'Enter your ' + label}
          {...input}
        />
        {hasValue && <IconMaterial icon={'check_circle'} />}
      </span>
    </label>
  )
}

export default TextInput
