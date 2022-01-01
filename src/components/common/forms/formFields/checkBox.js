import React from 'react'

const CheckBox = ({ id, label, meta, onClick }) => {
  const { dirty, error, touched, invalid } = meta
  const hasError = invalid && !!touched
  const hasValue = !!dirty && !invalid
  const required = invalid
  return (
    <>
      <label key={id} htmlFor={id} className={`label ${hasValue ? 'touched' : ''}`}>
        {label}
        {required && !hasValue && <span className="required">Required</span>}
        {hasError && <span className="error">{error}</span>}

        <input type="checkbox" id={id} name={label} value="True" onClick={onClick} />
      </label>
    </>
  )
}

export default CheckBox
