import React, { useState } from 'react'
import Wheel from '@uiw/react-color-wheel'

const ColorWheel = ({}) => {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 })

  return (
    <Wheel
      color={hsva}
      onChange={(color) => {
        setHsva({ ...hsva, ...color.hsva })
      }}
    />
  )
}

export default ColorWheel
