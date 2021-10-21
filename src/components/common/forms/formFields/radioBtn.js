import React from 'react'

const RadioBtn = ({ label, input, meta, fieldId, onClick }) => {
  const { name } = input
  const { dirty, invalid } = meta
  const hasValue = !!dirty && !invalid

  return (
    <label className={`${hasValue ? 'touched' : ''}`}>
      {label}
      <input type="radio" id={fieldId} name={name} value={label} onClick={onClick} />
    </label>
  )
}

export default RadioBtn
