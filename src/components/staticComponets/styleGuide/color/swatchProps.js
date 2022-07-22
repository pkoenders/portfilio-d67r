import React, { useState, useLayoutEffect } from 'react'

//helpers
import { getRgbOnly2Hex } from '/src/utils/helpers'

import styled from 'styled-components'
const Props = styled.div`
  padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/4']};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.page.bground.default};

  &.default {
    padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
    background-color: #ffffff;
  }
  span {
    display: inherit;
    width: 100%;
    align-items: center;
    padding: 0;
  }
`

const SwatchProps = ({ className, colorStyle, colorHexId }) => {
  // Set states
  const [colorValHex, setColorValHex] = useState([])
  // const [colorValRgb, setColorValRgb] = useState([])
  const [colorValRgb, setColorValRgb] = useState([])

  // getComputedStyles
  const setSwatchProps = (swatchSrc) => {
    // set colorVal to hexidecimal
    setColorValHex(getRgbOnly2Hex(getComputedStyle(swatchSrc).backgroundColor))
    // set colorValRgb to Rgb
    setColorValRgb(getComputedStyle(swatchSrc).backgroundColor)
    // set colorValRgb to Rgba
    // setColorValRgba(getRgb2Hex(getComputedStyle(swatchSrc).backgroundColor))
  }

  useLayoutEffect(() => {
    let swatchSrc = document.getElementById(colorHexId)
    setSwatchProps(swatchSrc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Props className={className}>
      <span>
        Theme:&nbsp;
        <strong>{colorStyle}</strong>
      </span>

      <span>
        Hex:&nbsp;
        <strong>
          <i className="colorValHex">{colorValHex}</i>
        </strong>
      </span>

      <span>
        Rgb:&nbsp;
        <strong>{colorValRgb}</strong>
      </span>
    </Props>
  )
}

export default SwatchProps
