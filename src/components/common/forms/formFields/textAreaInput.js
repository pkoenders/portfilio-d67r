import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const TextAreaInput = ({ id, label, input, type, meta, describedby, required }) => {
  // const { name } = input
  const { dirty, error, touched, invalid } = meta
  const hasError = invalid && !!touched
  const hasValue = !!dirty && !invalid

  return (
    <label
      key={id}
      htmlFor={id}
      className={hasError ? 'error' : undefined || hasValue ? 'touched' : undefined}
    >
      {label}
      {required && !hasValue && <span className="required">Required</span>}
      {hasError && <span className="error">{error}</span>}
      <span className="textArea">
        <textarea
          id={id}
          type={type}
          rows="5"
          aria-invalid={hasError && 'true'}
          placeholder={'Enter your ' + label}
          aria-describedby={describedby && `Described by ${describedby}`}
          {...input}
        />
        {hasValue && <IconMaterial icon={'check_circle'} />}
      </span>
    </label>
  )
}

export default TextAreaInput
