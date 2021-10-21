import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const TextAreaInput = ({ label, input, type, meta, required }) => {
  const { name } = input
  const { dirty, error, touched, invalid } = meta
  const hasError = invalid && !!touched
  const hasValue = !!dirty && !invalid

  return (
    <label
      htmlFor={name}
      className={hasError ? 'error' : undefined || hasValue ? 'touched' : undefined}
    >
      {label}
      {required && !hasValue && <span className="required">Required</span>}
      {hasError && <span className="error">{error}</span>}
      <span className="textArea">
        <textarea id={name} type={type} rows="5" placeholder={'Enter your ' + label} {...input} />
        {hasValue && <IconMaterial icon={'check_circle'} />}
      </span>
    </label>
  )
}

export default TextAreaInput
