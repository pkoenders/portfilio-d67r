import React from 'react'

import styled from 'styled-components'

const Switcher = styled.button`
  display: flex !important;
  height: ${({ theme }) => theme.header.height};
  align-self: center;
  align-items: center;
  margin: auto 0;
  padding: ${({ theme }) => theme.padding['1/16']} 12px;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 999rem;
  /* border: 1px solid ${({ theme }) => theme.colors.header[800]}; */
  box-shadow: ${({ theme }) => theme.boxShadow.lg};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    top: 60px;
    right: ${({ theme }) => theme.padding['1/4']};
  }

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

const ThemeSwitcher = ({ changeTheme, currTheme }) => {
  return (
    <Switcher type="button" onClick={changeTheme}>
      {currTheme ? (
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
