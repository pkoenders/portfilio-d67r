import React from 'react'

const RadioBtn = ({ id, label, input, meta, onClick }) => {
  const { name } = input
  const { dirty, invalid } = meta
  const hasValue = !!dirty && !invalid

  return (
    <label key={id} htmlFor={id} className={`${hasValue ? 'touched' : ''}`}>
      {label}
      <input type="radio" id={id} name={name} value={label} onClick={onClick} />
    </label>
  )
}

export default RadioBtn
