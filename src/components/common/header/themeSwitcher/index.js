import React from 'react'

import styled from 'styled-components'

const Switcher = styled.button`
  display: flex !important;
  align-self: center;
  padding: ${({ theme }) => theme.padding['1/16']} 12px;
  position: absolute;
  right: 0;
  border-radius: 999rem;
  /* border: 1px solid ${({ theme }) => theme.colors.header[800]}; */
  box-shadow: ${({ theme }) => theme.boxShadow.lg};

  span {
    color: ${({ theme }) => theme.colors.pageHold[200]};
    white-space: nowrap;
    display: inherit;
    flex-direction: row;
    align-items: center;
    transition: transform 0.4s ease-in;
    span {
      margin-left: 6px;
      font-size: 22px;
    }
    .dark {
      margin: 0;
      margin-right: 6px;
    }
  }
`

const ThemeSwitcher = ({ changeTheme, lightTheme }) => {
  return (
    <Switcher type="button" onClick={changeTheme}>
      {lightTheme ? (
        <span aria-label="Light mode" role="img">
          Light<span>🌞</span>
        </span>
      ) : (
        <span aria-label="Dark mode" role="img">
          <span className="dark">🌜</span>Dark
        </span>
      )}
    </Switcher>
  )
}

export default ThemeSwitcher
