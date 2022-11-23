import React from 'react'

import BtnListToggle from '/src/components/common/filter/btnListToggle'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const ToggleListStyle = ({ itemID, ariaPressed, ariaLabel, buttonIcon, updateLayoutStlye }) => {
  // Toggle sort order - Asc / Desc
  function handleListStyle(e) {
    if (!e.key) {
      setListStyle(e)
    } else {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'Enter':
        case 'Spacebar':
          e.preventDefault()
          setListStyle(e)
          break

        default:
          break
      }
    }
  }

  function setListStyle(e) {
    // Set list style

    var allListStyles = document.querySelectorAll('.listWrapper button')

    // Get all list style buttons and reset
    for (var i = 0; i < allListStyles.length; ++i) {
      allListStyles[i].setAttribute('aria-pressed', 'false')
    }

    e.target.setAttribute('aria-pressed', 'true')
    updateLayoutStlye(e.target.id)
    sessionStorage.setItem('Layout style', e.target.id)
  }

  return (
    <BtnListToggle
      id={itemID}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel}
      onClick={handleListStyle}
      onKeyDown={handleListStyle}
    >
      <IconMaterial icon={buttonIcon} />
    </BtnListToggle>
  )
}

export default ToggleListStyle
