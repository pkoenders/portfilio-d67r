import React, { useState } from 'react'
import styled from 'styled-components'
import SwatchCopy from './swatchCopy'

const SwatchColorWraper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  aspect-ratio: 1 / 1;

  &:hover {
    button {
      margin: 0 auto;
      opacity: 1;
    }
  }
`

const SwatchColor = ({ iD, bgColor }) => {
  const [resetCopyIcon, setResetCopyIcon] = useState(1)

  function ResetCopyIcon() {
    setResetCopyIcon((prevState) => prevState + 1)
  }

  return (
    <SwatchColorWraper
      id={iD}
      style={{
        backgroundColor: bgColor,
      }}
      onMouseEnter={ResetCopyIcon}
    >
      <SwatchCopy resetCopyIcon={resetCopyIcon} />
    </SwatchColorWraper>
  )
}

export default SwatchColor
