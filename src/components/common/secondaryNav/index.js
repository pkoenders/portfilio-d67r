import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import i18n from '../../../../config/i18n'
import linkResolver from '../../../utils/linkResolver'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const SecondaryNavWrapper = styled.section`
  z-index: 10000;
  position: fixed;
  top: ${({ theme }) => theme.header.height};
  left: 0px;
  right: 0px;
  padding: 0;
  color: ${({ theme }) => theme.colors.header.text.default};
  background-color: ${({ theme }) => theme.colors.header.default};
  border-bottom: ${({ theme }) => theme.colors.header[200]};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  will-change: transform;
  transition: ${({ theme }) => theme.transition.easeOut.lazy};

  @media print {
    display: none;
  }

  nav {
    height: 60px;
    align-items: center;
    max-width: ${({ theme }) => theme.screens.lg};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.padding['1/2']};
    align-items: center;
    flex-basis: 100%;

    button,
    a {
      display: flex;
      align-items: center;
      white-space: pre-line;
      width: fit-content;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.colors.header.text.default};
      background-color: transparent;
      text-align: left;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      line-height: ${({ theme }) => theme.lineHeight.tight};

      .label {
        display: flex;
      }
      .shortLabel {
        display: none;
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        .label {
          display: none;
        }

        .shortLabel {
          display: flex;
        }
      }

      i {
        pointer-events: none;
        font-size: 24px;
      }
    }

    .backBtn {
      padding-right: ${({ theme }) => theme.padding.default};
      i {
        padding-right: ${({ theme }) => theme.padding['1/8']};
      }
    }

    .alignRight {
      display: flex;
      flex-direction: row;
      grid-gap: ${({ theme }) => theme.padding.default};
      align-items: center;
      margin: 0 0 0 auto;

      button:last-child,
      a:last-child {
        text-align: right;
      }
    }

    button:hover,
    a:hover {
      outline: none;
      color: ${({ theme }) => theme.colors.primary[300]};
      text-decoration: none;
      i {
        color: inherit;
      }
    }
  }

  &.slide {
    will-change: transform;
    top: 0px;
  }
`

const SecondaryNav = ({ currentLang, next, nextTitle, previous, previousTitle }) => {
  // console.log(next)
  // console.log(previous)
  // console.log(currentLang)
  // console.log(next.uid)
  // console.log(previous.uid)

  useEffect(() => {
    const backBtn = document.querySelector('.backBtn')
    'click, keydown'.split(', ').forEach(function (e) {
      backBtn.addEventListener(e, (evt) => {
        if (!evt.key) {
          window.history.back()
        } else {
          switch (evt.key) {
            case 'Enter':
            case 'Return':
            case 'Spacebar':
              evt.preventDefault()
              window.history.back()
              break

            default:
              break
          }
        }
      })
    })
  }, [])

  return (
    <SecondaryNavWrapper className="secondaryNav">
      <nav aria-label="Secondary navigation">
        <button className="backBtn" type="button">
          <IconMaterial icon={'arrow_back'} />
          {i18n[currentLang].back}
        </button>

        <span className="alignRight">
          {previous && previous.lang === currentLang && (
            <Link to={linkResolver(previous)}>
              <IconMaterial icon={'chevron_left'} />
              <span className="label">{previousTitle}</span>
              <span className="shortLabel">Previous</span>
            </Link>
          )}

          {next && next.lang === currentLang && (
            <Link to={linkResolver(next)}>
              <span className="label">{nextTitle}</span>
              <span className="shortLabel">Next</span>
              <IconMaterial icon={'chevron_right'} />
            </Link>
          )}
        </span>
      </nav>
    </SecondaryNavWrapper>
  )
}

export default SecondaryNav
