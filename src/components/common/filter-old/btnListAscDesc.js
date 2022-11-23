import React from 'react'

import BtnListToggle from '/src/components/common/filter/btnListToggle'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const AscDesc = ({ sortAscDescClick }) => {
  // Toggle sort order - Asc / Desc

  function handleSort(e) {
    if (!e.key) {
      toggleList(e)
    } else {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault()
          if (!e.target.classList.contains('desc')) {
            toggleList(e)
          }
          break

        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault()
          if (e.target.classList.contains('desc')) {
            toggleList(e)
          } else {
          }
          break

        default:
          break
      }
    }
  }

  function toggleList(e) {
    // Toggle list and Aria labels for button
    e.target.classList.toggle('desc')
    sortAscDescClick()
    e.target.getAttribute('aria-label') === 'Sort by descending'
      ? e.target.setAttribute('aria-label', 'Sort by ascending')
      : e.target.setAttribute('aria-label', 'Sort by descending')
  }

  return (
    <BtnListToggle
      onClick={handleSort}
      onKeyDown={handleSort}
      className="toggleOrder"
      aria-label="Sort by ascending or descending"
    >
      <IconMaterial icon={'filter_list'} />
    </BtnListToggle>
  )
}

export default AscDesc
