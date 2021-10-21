import React from 'react'

const CheckBox = ({ label, input, meta, fieldId, onClick }) => {
  // const { name } = input
  const { dirty, error, touched, invalid } = meta
  const hasError = invalid && !!touched
  const hasValue = !!dirty && !invalid
  const required = invalid
  return (
    <>
      <label className={`label ${hasValue ? 'touched' : ''}`}>
        {label}
        {required && !hasValue && <span className="required">Required</span>}
        {hasError && <span className="error">{error}</span>}

        <input type="checkbox" id={fieldId} name={label} value="True" onClick={onClick} />
      </label>
    </>
  )
}

export default CheckBox
