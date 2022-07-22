import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Icons
import IconMaterial from '/src/components/common/icons/material'
import ToolTip from '/src/components/common/toolTip/'

const SwatchCopyWrapper = styled.button`
  display: flex;
  z-index: 100000;
  position: relative;
  align-items: center;
  padding: ${({ theme }) => theme.padding['1/4']};
  transition: all 0.25s ease-in-out;
  margin: 0 auto -2px auto;
  opacity: 0;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  .toolTip {
    display: none;
  }

  i {
    pointer-events: none;
  }
  i.checked {
    color: ${({ theme }) => theme.colors.alert.l1.default};
  }

  &:hover {
    margin: 0 auto;
    opacity: 1;
    .toolTip {
      display: flex;
    }
  }
`

const SwatchCopy = ({ resetCopyIcon }) => {
  const [copyDoneIcon, setCopyDoneIcon] = useState(resetCopyIcon)

  var copySwatchHexVal = ''

  useEffect(() => {
    // Update copyDoneIcon
    setCopyDoneIcon(resetCopyIcon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCopyIcon])

  function handleCopySwatchColor(e) {
    let item = e.target

    // Set copy icon to 'Done - tick' state
    setCopyDoneIcon(0)

    // Get the innerHTML of the .colorValHex
    copySwatchHexVal = item.closest('.swatchWrapper').querySelector('.colorValHex').innerHTML

    // Copy to the clipboard
    navigator.clipboard.writeText(copySwatchHexVal)

    // Update toolTip props
    let toolTip = item.closest('.swatchWrapper').querySelector('.toolTip')

    // Pass in the content
    toolTip.innerHTML = copySwatchHexVal + ' - copied'

    // Set the display for this
    toolTip.classList.add('show')

    // Set the horizontal absolute postion
    toolTip.style.left = -(toolTip.clientWidth / 2 - item.clientWidth / 2) + 'px'

    // Log some stuff for me
    // console.log('copySwatchHexVal = ' + copySwatchHexVal)
  }

  function HideToolTip(e) {
    let item = e.target
    let toolTip = item.closest('.swatchWrapper').querySelector('.toolTip')
    toolTip.classList.remove('show')
  }

  return (
    <SwatchCopyWrapper
      onClick={handleCopySwatchColor}
      onMouseLeave={HideToolTip}
      type="button"
      aria-label="Copy hexidecimal color"
    >
      <ToolTip content={copySwatchHexVal} />
      {copyDoneIcon === 0 ? (
        <IconMaterial icon={'done'} className={'checked'} />
      ) : (
        <IconMaterial icon={'content_copy'} />
      )}
    </SwatchCopyWrapper>
  )
}

export default SwatchCopy
