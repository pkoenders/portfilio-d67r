import React from 'react'

import styled from 'styled-components'

const MaterialIcon = styled.i`
  /* Matrial icons. */

  /* Matrial icons. */
  .material-symbols.md-18,
  .material-symbols-outlined.md-18,
  .material-symbols-round.md-18,
  .material-symbols-sharp.md-18 {
    font-size: 18px;
  }

  .material-symbols.md-24,
  .material-symbols-outlined.md-24,
  .material-symbols-round.md-24,
  .material-symbols-sharp.md-24 {
    font-size: 24px;
  }

  .material-symbols.md-36,
  .material-symbols-outlined.md-36,
  .material-symbols-round.md-36,
  .material-symbols-sharp.md-36 {
    font-size: 36px;
  }

  .material-symbols.md-48,
  .material-symbols-outlined.md-48,
  .material-symbols-round.md-48,
  .material-symbols-sharp.md-48 {
    font-size: 48px;
  }

  display: flex;
  align-items: center;
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48;
`

const MaterialIconButton = styled.button.attrs({
  type: 'button',
})`
  /* Matrial icons. */

  .material-symbols.md-18,
  .material-symbols-outlined.md-18,
  .material-symbols-round.md-18,
  .material-symbols-sharp.md-18 {
    font-size: 18px;
  }

  .material-symbols.md-24,
  .material-symbols-outlined.md-24,
  .material-symbols-round.md-24,
  .material-symbols-sharp.md-24 {
    font-size: 24px;
  }

  .material-symbols.md-36,
  .material-symbols-outlined.md-36,
  .material-symbols-round.md-36,
  .material-symbols-sharp.md-36 {
    font-size: 36px;
  }

  .material-symbols.md-48,
  .material-symbols-outlined.md-48,
  .material-symbols-round.md-48,
  .material-symbols-sharp.md-48 {
    font-size: 48px;
  }
  display: flex;
  align-items: center;
  font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 48;
`

const Material = ({ icon, size, style, type, onClick, ariaLabel, ref, className }) => {
  // Today our default is 'Round'
  if (style === undefined) {
    // Filled - Default
    // style = ''

    // Outlined
    // style = '-outlined'

    // Rounded
    // style = '-round'

    // Sharp
    style = '-sharp'
  }

  if (size === undefined) {
    // Default
    size = '24'
  }

  return (
    // aria hidden, visible and as button
    <>
      {type === undefined && ariaLabel === undefined && (
        <MaterialIcon
          className={`material-symbols${style} md-${size} ${className}`}
          aria-hidden="true"
          ref={ref}
        >
          {icon}
        </MaterialIcon>
      )}

      {type === undefined && ariaLabel !== undefined && (
        <MaterialIcon
          className={`material-symbols${style} md-${size} ${className}`}
          aria-label={ariaLabel}
          ref={ref}
        >
          {icon}
        </MaterialIcon>
      )}

      {type === 'button' && (
        <MaterialIconButton
          className={`material-symbols${style} md-${size} ${className}`}
          onClick={onClick}
          ref={ref}
        >
          {icon}
        </MaterialIconButton>
      )}
    </>
  )
}

export default Material
