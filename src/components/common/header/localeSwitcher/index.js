import React, { useEffect } from 'react'
import { Link } from 'gatsby'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const Switcher = styled.div`
  color: ${({ theme }) => theme.colors.header.default};
  height: ${({ theme }) => theme.header.height};
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0;
  padding: 0 ${({ theme }) => theme.padding['1/2']};
  z-index: 10000;

  &.open {
    background-color: ${({ theme }) => theme.colors.header.bground.default};
    ul {
      display: block;
    }
  }
`
const SwitcherBtn = styled.button.attrs((props) => ({
  type: props.type || 'button',
  'aria-label': 'Select a language',
}))`
  color: ${({ theme }) => theme.colors.header.default};
  padding: ${({ theme }) => theme.padding['1/8']};
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header.bground[900]};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    border-color: ${({ theme }) => theme.colors.header.bground[700]};
  }
`
const ListLocales = styled.ul`
  position: absolute;
  display: none;
  top: ${({ theme }) => theme.header.height};
  right: 0px;
  padding: 0 0 ${({ theme }) => theme.padding['1/4']};
  list-style: none;
  width: auto;
  color: ${({ theme }) => theme.colors.header.default};
  background-color: ${({ theme }) => theme.colors.header.bground.default};
  /* background-color: ${({ theme }) => theme.colors.header.bground[900]}; */

  /* border: 1px solid ${({ theme }) => theme.colors.header.bground[800]};
  border-top: none; */
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.default}
    ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow.md};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    border: none;
    box-shadow: none;
  }

  li {
    display: flex;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;
      white-space: nowrap;
      color: inherit;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
      width: fit-content;
      margin-left: auto;
      i {
        margin-right: ${({ theme }) => theme.margin['1/8']};
        color: ${({ theme }) => theme.colors.primary[800]};
      }
    }
    a:hover {
      text-decoration: none;
    }
  }
`

const LocalSwitcher = ({ currentLang, currentPath }) => {
  useEffect(() => {
    const localeSwitcher = document.querySelector('.localeSwitcher')
    const toggleLocaleBtn = document.querySelector('.localeBtn')

    // Toggle locale selector
    toggleLocaleBtn.addEventListener('click', function (e) {
      e.stopPropagation()
      !localeSwitcher.classList.contains('open') ? openLocale() : closeLocale()
    })

    window.addEventListener('click', function () {
      if (localeSwitcher.classList.contains('open')) {
        closeLocale()
      }
    })

    function openLocale() {
      //console.log('open')
      localeSwitcher.classList.add('open')
      localeSwitcher.setAttribute('aria-expanded', 'true')
      localeSwitcher.setAttribute('aria-pressed', 'true')
    }

    function closeLocale() {
      //console.log('open')
      localeSwitcher.classList.remove('open')
      localeSwitcher.setAttribute('aria-expanded', 'false')
      localeSwitcher.setAttribute('aria-pressed', 'flase')
    }
  }, [])

  return (
    <Switcher className="localeSwitcher" data-name="locale-switcher">
      <SwitcherBtn className="localeBtn" aria-label="Language selector" name="Language selector">
        <IconMaterial icon={'translate'} />
      </SwitcherBtn>
      <ListLocales>
        <li>
          <Link hrefLang="en-nz" to={`/${currentPath}`}>
            {currentLang === 'en-nz' && <IconMaterial icon={'check'} />}
            English - NZ
          </Link>
        </li>
        <li>
          <Link hrefLang="mi-nz" to={`/mi/${currentPath}`}>
            {currentLang === 'mi-nz' && <IconMaterial icon={'check'} />}
            Te reo - Māori
          </Link>
        </li>
      </ListLocales>
    </Switcher>
  )
}

export default LocalSwitcher
