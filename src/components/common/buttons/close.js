import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const CLoseWrapper = styled.button.attrs((props) => ({
  type: props.type || 'button',
  // 'aria-label': 'Close alert window',
}))`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`
const Close = ({ onClick, label }) => {
  return (
    <CLoseWrapper onClick={onClick}>
      {label && label} <IconMaterial icon={'close'} />
    </CLoseWrapper>
  )
}

export default Close
