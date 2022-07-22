import React from 'react'

import styled from 'styled-components'

const MaterialIcon = styled.i`
  /* Matrial icons. */
  display: flex;

  justify-content: center;
  text-align: center;
  align-items: center;

  /* Matrial icons. */
  .material-icons.md-18,
  .material-icons-outlined.md-18,
  .material-icons-round.md-18,
  .material-icons-sharp.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24,
  .material-icons-outlined.md-24,
  .material-icons-round.md-24,
  .material-icons-sharp.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36,
  .material-icons-outlined.md-36,
  .material-icons-round.md-36,
  .material-icons-sharp.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48,
  .material-icons-outlined.md-48,
  .material-icons-round.md-48,
  .material-icons-sharp.md-48 {
    font-size: 48px;
  }

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
`

const MaterialIconButton = styled.button.attrs({
  type: 'button',
})`
  /* Matrial icons. */
  .material-icons.md-18,
  .material-icons-outlined.md-18,
  .material-icons-round.md-18,
  .material-icons-sharp.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24,
  .material-icons-outlined.md-24,
  .material-icons-round.md-24,
  .material-icons-sharp.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36,
  .material-icons-outlined.md-36,
  .material-icons-round.md-36,
  .material-icons-sharp.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48,
  .material-icons-outlined.md-48,
  .material-icons-round.md-48,
  .material-icons-sharp.md-48 {
    font-size: 48px;
  }

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
`

const Material = ({ icon, size, style, type, onClick, ariaLabel, ref, className }) => {
  // Today our default is 'Round'
  if (style === undefined) {
    // Filled - Default
    // style = ''

    // Outlined
    // style = '-outlined'

    // Rounded
    style = '-round'

    // Sharp
    // style = '-sharp'
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
          className={`material-icons${style} md-${size} ${className}`}
          aria-hidden="true"
          ref={ref}
        >
          {icon}
        </MaterialIcon>
      )}

      {type === undefined && ariaLabel !== undefined && (
        <MaterialIcon
          className={`material-icons${style} md-${size} ${className}`}
          aria-label={ariaLabel}
          ref={ref}
        >
          {icon}
        </MaterialIcon>
      )}

      {type === 'button' && (
        <MaterialIconButton
          className={`material-icons${style} md-${size} ${className}`}
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
