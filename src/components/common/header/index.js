import React, { useEffect } from 'react'

// Helpers
import { Link } from 'gatsby'
import i18n from '/config/i18n'
import linkResolver from '/src/utils/linkResolver'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Layout
import Brand from '../brand/'
// import LocaleSwitcher from './localeSwitcher/'

// Styles
import '/src/styles/hamburger.scss'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  .skipNav {
    position: absolute;
    top: -100%;
    /* transform: translateY(-100%); */
    left: 0px;
    right: 0px;
    display: flex;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.header[50]};
    z-index: 10000;

    .skipLink {
      margin: 0 auto;
      white-space: nowrap;
      display: inherit;
      width: fit-content;
      align-self: center;
      text-transform: uppercase;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding.default};

      color: ${({ theme }) => theme.colors.header[800]};
      background-color: ${({ theme }) => theme.colors.page[100]};

      border-radius: ${({ theme }) => theme.borderRadius.sm};
      box-shadow: ${({ theme }) => theme.boxShadow.lg} !important;
    }
    .skipLink:focus {
    }
  }
  .skipNav:focus-within {
    top: 0px;
    .skipLink:focus {
    }
  }

  .slide {
    will-change: transform;
    transition: transform 0.75s;
    transform: translate(0, 0px);
  }

  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  transform: translate(0, 0);
  will-change: transform;
  transition: all 0.75s;
  height: ${({ theme }) => theme.header.height};

  nav.headerNav {
    z-index: 999;
    min-width: 130px;
    height: inherit;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;

    a.brand {
      z-index: 10001 !important;
      order: 3;
      display: flex;
      align-self: center;
      align-items: center;
      margin: auto 0;
      z-index: 1003;
      position: absolute;
      left: ${({ theme }) => theme.padding['1/2']};
      right: auto;
      height: ${({ theme }) => theme.header.height};
      top: inherit;

      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        order: 1;
      }

      span {
        display: none;
      }

      svg {
        height: 28px;
        width: auto;
      }
    }

    a.brand {
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        /* right: 64px; */
        right: ${({ theme }) => theme.padding['1/2']};
        left: auto;
      }
    }

    button.hamburger {
      order: 0;
      display: none;
      position: absolute;
      left: ${({ theme }) => theme.padding['1/2']};
      margin: 0 0 auto 0;
      width: fit-content;
      white-space: nowrap;
      align-items: center;
      height: ${({ theme }) => theme.header.height};
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
      pointer-events: all;

      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        display: flex;
      }
    }

    button:focus {
      outline: none;
    }

    // Mobile nav
    > ul {
      justify-self: start;
      display: none;
      list-style: none;
      padding: 3px 0 120px 3px;
      margin: 0;
      top: ${({ theme }) => theme.header.height};
      left: 0px;
      position: relative;
      width: 100%;
      margin: 0 auto;
      overflow-x: scroll;

      li {
        display: block;

        a,
        p,
        span,
        button {
          font-size: 120%;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.header.text.default};
          background-color: transparent;
          border: none;
          padding: ${({ theme }) => theme.padding['1/2']};
          position: relative;
          text-align: left;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          z-index: 10000;

          i {
            color: ${({ theme }) => theme.colors.primary.default};
            margin-left: ${({ theme }) => theme.padding['1/4']};
          }
        }
        button.isActive {
          i {
            transform: rotate(180deg);
          }
        }

        a:hover,
        button:hover {
          text-decoration: none !important;
          color: ${({ theme }) => theme.colors.header.text.default};
        }

        a.activeNavItem,
        button.activeNavItem {
          border-left: 5px solid ${({ theme }) => theme.colors.header.text.default};
          color: ${({ theme }) => theme.colors.header.text.default};
          font-weight: 600;
          margin-left: -5px;
        }

        a:after {
          content: '';
          position: absolute;
          bottom: 0px;
          display: flex;
          border-radius: 1.5px;
          background-color: ${({ theme }) => theme.colors.header.text.default};
          height: 1px;
          width: 0;
          left: -3px;
          transition: width 150ms ease-in-out;
        }

        a:hover:after {
          width: 100%;
        }

        ul {
          display: none;
          margin-left: 0;
          li {
            a {
              padding-left: ${({ theme }) => theme.padding['1/2']};
              flex-direction: row-reverse;
              i {
                color: ${({ theme }) => theme.colors.transparent};
                margin-left: 0;
                margin-right: ${({ theme }) => theme.margin['1/4']};
              }
            }
            a.activeNavItem {
              border-left: 5px solid ${({ theme }) => theme.colors.transparent};
              i {
                color: ${({ theme }) => theme.colors.page[100]};
              }
            }
          }
        }

        ul.isActive {
          display: flex;
          flex-direction: column;
        }
      }

      li.closeMenu {
        display: block;

        button {
          left: 0px;
        }
      }
    }
  }

  // Mobile nav - Open
  nav.open {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: 100vh;
    max-width: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.header.default};

    ul {
      display: block;
    }
  }

  // Desktop nav
  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    nav.headerNav {
      position: relative;
      max-width: ${({ theme }) => theme.screens.xl};
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: space-between;

      > button {
        display: none;
      }

      > ul {
        display: flex;
        justify-self: center;
        align-items: stretch;
        padding: 0px ${({ theme }) => theme.padding['3xl']};
        /* margin: 0 auto 0 ${({ theme }) => theme.margin.default}; */
        margin: 0 auto;
        top: 0px;
        position: relative;
        width: auto;
        overflow-x: visible;
        max-width: ${({ theme }) => theme.screens.md};

        li {
          display: flex;
          align-items: center;
          line-height: initial;
          /* height: ${({ theme }) => theme.header.height}; */

          a,
          button {
            font-size: 95%;
            text-align: center;
            line-height: initial;
            height: ${({ theme }) => theme.header.height};
          }

          a.activeNavItem,
          button.activeNavItem {
            border: none;
            margin: 0;
            font-weight: initial;
          }

          a:after,
          button:after {
            content: '';
            position: absolute;
            top: 0px;
            visibility: hidden;
            /* background-color: ${({ theme }) => theme.colors.page.bground.default}; */
            background-color: ${({ theme }) => theme.colors.card[200]};
            height: ${({ theme }) => theme.margin['1/8']};
            border-radius: 0;
            transform: scaleX(0);
            transition: all 150ms ease-in-out;
          }

          a:hover:after,
          button:hover:after,
          a.activeNavItem:after,
          button.activeNavItem:after {
            left: 2px;
            right: 2px;
            width: auto;
            visibility: visible;
            transform: scaleX(1);
          }

          button.secondaryNavBtn {
            display: flex;
            align-items: center;
            font-weight: normal;
            position: relative;
            border-left: none;
            z-index: 2000;
            i {
              margin-left: ${({ theme }) => theme.margin['1/4']};
              margin-right: -${({ theme }) => theme.margin['1/4']};
              color: ${({ theme }) => theme.colors.primary.default};
            }
          }

          button.secondaryNavBtn.isActive {
            background-color: ${({ theme }) => theme.colors.header[800]};
            /* background-color: ${({ theme }) => theme.colors.primary[1100]}; */
            i {
              transform: rotate(180deg);
              /* color: ${({ theme }) => theme.colors.header.default}; */
            }
          }
          button.secondaryNavBtn.isActive:after {
            display: none;
          }

          ul.secondaryNavList {
            display: none;
            flex-direction: column;
            position: absolute;
            margin: 0;
            padding: ${({ theme }) => theme.padding['1/2']} 0;
            top: ${({ theme }) => theme.header.height};
            background-color: ${({ theme }) => theme.colors.header[800]};
            /* background-color: ${({ theme }) => theme.colors.primary[1100]}; */
            border-radius: 0 0 ${({ theme }) => theme.borderRadius.default}
              ${({ theme }) => theme.borderRadius.default};
            box-shadow: ${({ theme }) => theme.boxShadow.lg} !important;

            li {
              padding: ${({ theme }) => theme.padding['1/8']} ${({ theme }) => theme.padding['1/2']};

              a {
                white-space: nowrap;
                padding: ${({ theme }) => theme.padding['1/4']}
                  ${({ theme }) => theme.padding['1/2']};
                border-radius: ${({ theme }) => theme.borderRadius.sm};
                display: flex;
                align-items: center;

                i {
                  visibility: hidden;
                  display: none;
                }
              }

              a:hover,
              a.activeNavItem {
                background-color: ${({ theme }) => theme.colors.primary.default};
                /* background-color: ${({ theme }) => theme.colors.header.default}; */
                border: none;
                i {
                  display: none;
                }
              }

              a:after {
                height: 0px;
              }
            }
          }

          ul.secondaryNavList.isActive {
            display: flex;
          }

          ul.secondaryNavList {
            a,
            p,
            span,
            button {
              /* line-height: 190%; */
              line-height: initial;
              height: auto;
              font-weight: 400;
              color: ${({ theme }) => theme.colors.header.text.default};
              margin: 0;
              padding-left: ${({ theme }) => theme.padding['1/2']};
              padding-right: ${({ theme }) => theme.padding['1/2']};
              position: relative;
              text-align: center;
              cursor: pointer;
              z-index: 10000;
            }

            a:hover,
            button:hover {
              color: ${({ theme }) => theme.colors.header.text.default};
            }

            a.activeNavItem,
            button.activeNavItem {
              border-left: none;
              font-weight: normal;
              margin: inherit;
              color: ${({ theme }) => theme.colors.header.text.default};
            }
          }
        }

        li.hide {
          display: none;
        }
      }
    }
  }

  // Desktop header
  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.header.default};
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    will-change: transform;
    transition: opacity 0.75s;
    transition-timing-function: ease-in;
  }

  &.fillBground {
    transition: all 0.75s;
    background-color: ${({ theme }) => theme.colors.header.default};
  }

  &.fillBground::before,
  &.fillBgroundQuick::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.header.default};
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    will-change: transform;
    transition: opacity 0.25s;
  }
`

const Header = ({ currentLang, currentPrefix, currentPath, primaryNav }) => {
  const _ = require('lodash')
  var pathName = ''
  if (typeof window !== 'undefined') {
    pathName = window.location.pathname
  }

  // console.log(primaryNav)
  // console.log('pathName = ' + pathName)

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: 'activeNavItem' } : {}
  }

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: 'activeNavItem' } : {}
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('click', function () {
      handleCloseSecondaryNav()
    })
  }

  function handleToggleSecondaryNav(e) {
    e.stopPropagation()
    const menuItem = e.currentTarget
    menuItem.classList.toggle('isActive')
    menuItem.nextSibling.classList.toggle('isActive')
    handleCloseSecondaryNav(menuItem)
  }

  function handleCloseSecondaryNav(menuItem) {
    var secondaryNavBtn = document.querySelectorAll('.secondaryNavBtn')
    var secondaryNavList = document.querySelectorAll('.secondaryNavList')
    if (window.innerWidth > 768) {
      for (var i = 0; i < secondaryNavBtn.length; ++i) {
        if (secondaryNavBtn[i] !== menuItem) {
          secondaryNavBtn[i].classList.remove('isActive')
          secondaryNavList[i].classList.remove('isActive')
        }
      }
    }
  }

  useEffect(() => {
    var pathName = ''
    if (typeof window !== 'undefined') {
      pathName = window.location.pathname
    }

    const skipLink = document.querySelector('.skipLink')
    const headerNavWrapper = document.querySelector('.headerNavWrapper')
    const secondaryNav = document.querySelector('.secondaryNav')
    const headerNav = document.querySelector('.headerNav')
    const toggleHamburger = document.querySelector('.hamburger')
    const closeHamburger = document.querySelector('.closeMenu')
    const clickBrand = document.querySelector('.brand')

    // Set nav on resize
    'load, resize, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        var viewportWidth = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        )
        viewportWidth >= 768 && closeHamburgerNav()
      })
    })

    var prevScrollpos = window.pageYOffset
    //
    // Toggle mobile menu
    toggleHamburger.addEventListener('click', function () {
      !!headerNav.classList.contains('open') ? closeHamburgerNav() : openHamburgerNav()
    })

    closeHamburger.addEventListener('click', function () {
      closeHamburgerNav()
    })

    skipLink.addEventListener('click', function () {
      closeHamburgerNav()
    })

    clickBrand.addEventListener('click', function () {
      closeHamburgerNav()
    })

    function openHamburgerNav() {
      headerNav.classList.add('open', 'fillBground')
      toggleHamburger.classList.add('is-active')
      toggleHamburger.setAttribute('aria-expanded', 'true')
      toggleHamburger.setAttribute('aria-pressed', 'true')
      closeHamburger.classList.remove('hide')
    }

    function closeHamburgerNav() {
      var secondaryNavBtn = document.querySelectorAll('.secondaryNavBtn')
      var secondaryNavList = document.querySelectorAll('.secondaryNavList')
      for (var i = 0; i < secondaryNavBtn.length; ++i) {
        secondaryNavBtn[i].classList.remove('isActive')
        secondaryNavList[i].classList.remove('isActive')
      }

      headerNav.classList.remove('open', 'fillBground')
      toggleHamburger.classList.remove('is-active')
      toggleHamburger.setAttribute('aria-expanded', 'false')
      toggleHamburger.setAttribute('aria-pressed', 'false')
      closeHamburger.classList.add('hide')
    }

    //
    // Handle slide/scroll effect of menu
    document.addEventListener('scroll', function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos >= currentScrollPos) {
        headerNavWrapper.classList.remove('slide')
        if (secondaryNav) {
          secondaryNav.classList.remove('slide')
        }
      } else {
        headerNavWrapper.classList.add('slide')
        if (secondaryNav) {
          secondaryNav.classList.add('slide')
        }
      }

      if (i18n.allPrefix.includes(pathName)) {
        if (currentScrollPos >= 60) {
          headerNavWrapper.classList.add('fillBground')
        } else {
          headerNavWrapper.classList.remove('fillBground')
        }
      }

      if (window.pageYOffset <= 0) {
        currentScrollPos = 0
      }
      prevScrollpos = currentScrollPos
    })
  }, [])

  return (
    <HeaderWrapper
      className={
        i18n.allPrefix.includes(pathName) ? 'headerNavWrapper' : 'headerNavWrapper fillBground'
      }
      aria-label="Main heading"
    >
      <div className="skipNav">
        <a className="skipLink" href="#main">
          Skip navigation
        </a>
      </div>

      <nav className="headerNav" aria-label="Main navigation" role="navigation">
        <button
          className="hamburger hamburger--squeeze"
          type="button"
          aria-label="Open and Close navigation menu"
          aria-controls="mainNavigation"
          aria-expanded="false"
          aria-pressed="false"
        >
          <span className="hamburger-label"> {i18n[currentLang].menu}</span>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <Link
          className="brand"
          to={currentPrefix === '/' ? currentPrefix : `${currentPrefix}/`}
          title="Link to homepage"
        >
          <span>Link to homepage</span>
          <Brand alt={'Logo - Link to homepage'} />
        </Link>

        <ul aria-label="Secondary navigation">
          {primaryNav.map((navItem, index) => {
            //console.log(navItem.link)
            return (
              <li key={`main-nav-${index}`}>
                {navItem.primary.link.uid ? (
                  <Link
                    to={linkResolver(navItem.primary.link)}
                    activeClassName="activeNavItem"
                    getProps={navItem.primary.link.uid !== 'index' ? isPartiallyActive : isActive}
                  >
                    {navItem.primary.label.text}
                  </Link>
                ) : (
                  <button
                    className={
                      'secondaryNavBtn ' +
                      `${
                        pathName.includes(_.kebabCase(navItem.primary.label.text)) &&
                        'activeNavItem'
                      }`
                    }
                    onClick={handleToggleSecondaryNav}
                    // onKeyDown={handleToggleSecondaryNav}
                  >
                    {navItem.primary.label.text}
                    <IconMaterial icon={'expand_more'} />
                  </button>
                )}

                {navItem.items.length > 0 ? (
                  <>
                    <ul className="secondaryNavList" aria-label="Secondary navigation">
                      {navItem.items.map((subNavItem, index) => {
                        return (
                          <li key={`sub-nav-${index}`}>
                            <Link
                              to={linkResolver(subNavItem.sub_nav_link)}
                              activeClassName="activeNavItem"
                              // getProps={isPartiallyActive}
                            >
                              {subNavItem.sub_nav_link_label.text}
                              <IconMaterial icon={'chevron_right'} />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : (
                  ''
                )}
              </li>
            )
          })}

          <li className="closeMenu hide">
            <button>
              {i18n[currentLang].close}
              <IconMaterial icon={'clear'} />
            </button>
          </li>
        </ul>
        {/* <LocaleSwitcher currentLang={currentLang} currentPath={currentPath} /> */}
      </nav>
    </HeaderWrapper>
  )
}

export default Header
