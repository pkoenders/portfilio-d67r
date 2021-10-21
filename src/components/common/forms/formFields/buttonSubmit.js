import React from 'react'

const Submit = ({ name, label, invalid, style }) => {
  return (
    <button type="submit" name={name} className={`button${style}`} disabled={invalid}>
      <i className="material-icons-round" aria-hidden="true">
        send
      </i>
      {label}
    </button>
  )
}
export default Submit
