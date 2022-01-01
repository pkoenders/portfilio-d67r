import React from 'react'

const SelectList = ({ id, label }) => {
  return (
    <option key={id} id={id} value={label}>
      {label}
    </option>
  )
}

export default SelectList
