import React from 'react'

import styled from 'styled-components'

const MaterialIcon = styled.i`
  /* Matrial icons. */
  display: flex;

  justify-content: center;
  text-align: center;
  align-items: center;

  .material-icons.md-18,
  .material-icons-round.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24,
  .material-icons-round.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36,
  .material-icons-round.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48,
  .material-icons-round.md-48 {
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

const MaterialIconButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  /* Matrial icons. */
  .material-icons.md-18,
  .material-icons-round.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24,
  .material-icons-round.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36,
  .material-icons-round.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48,
  .material-icons-round.md-48 {
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

const Material = ({ icon, size, style, type, onClick, ariaLabel, ref }) => {
  // Today our default is 'Round'
  if (style === undefined) {
    style = '-round'
  }

  if (size === undefined) {
    // Default
    size = '24'
  }

  return (
    // aria hidden, visible and as button
    <>
      {type === undefined && ariaLabel === undefined && (
        <MaterialIcon className={`material-icons${style} md-${size}`} aria-hidden="true" ref={ref}>
          {icon}
        </MaterialIcon>
      )}

      {type === undefined && ariaLabel !== undefined && (
        <MaterialIcon
          className={`material-icons${style} md-${size}`}
          aria-label={ariaLabel}
          ref={ref}
        >
          {icon}
        </MaterialIcon>
      )}

      {type === 'button' && (
        <MaterialIconButton
          className={`material-icons${style} md-${size}`}
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
