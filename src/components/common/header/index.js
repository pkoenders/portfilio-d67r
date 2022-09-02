import React, { Component, createRef } from 'react'

// Helpers
import { Link } from 'gatsby'
import i18n from '/config/i18n'
import linkResolver from '/src/utils/linkResolver'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Layout
import Brand from '/src/components/common/brand/'
// import LocaleSwitcher from './localeSwitcher/'
import ThemeSwitcher from '/src/components/common/header/themeSwitcher/'

// Styles
import '/src/styles/hamburger.scss'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  height: ${({ theme }) => theme.header.height};
  /* background-color: transparent; */
  background-color: ${({ theme }) => theme.colors.header.default};

  .skipNav {
    position: absolute;
    top: -1000rem;
    /* transform: translateY(-100%); */
    left: 0px;
    right: 0px;
    display: flex;
    height: 60px;
    color: #ffffff;
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
    @media print {
      display: none;
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

  nav.headerNav {
    z-index: 999;
    min-width: 130px;
    height: inherit;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    button.hamburger {
      order: 0;
      top: 0;
      display: none;
      position: absolute;
      align-self: center;
      padding: ${({ theme }) => theme.padding['1/2']};
      width: fit-content;
      white-space: nowrap;
      align-items: center;
      height: ${({ theme }) => theme.header.height};
      background-color: transparent;
      /* pointer-events: all; */
      line-height: initial;

      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        display: flex;
      }

      @media print {
        display: none;
      }
    }

    .brand {
      display: flex;
      height: ${({ theme }) => theme.header.height};
      align-self: center;
      align-items: center;
      margin: auto 0;

      a {
        display: flex;
        align-items: center;
        height: ${({ theme }) => theme.header.height};
        padding: 0 ${({ theme }) => theme.padding['1/2']};
        svg {
          max-height: fit-content;
          height: ${({ theme }) => theme.padding.default};
          @media (max-width: ${({ theme }) => theme.screens.sm}) {
            height: 24px;
          }
        }
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        position: absolute;
        top: 0;
        right: 0;
      }

      @media print {
        left: ${({ theme }) => theme.padding['1/4']};
        right: auto;
      }

      svg {
        width: auto;
      }
    }

    // Mobile nav
    > ul {
      justify-self: start;
      align-self: start;
      display: none;
      list-style: none;
      padding: 3px 0 120px 3px;
      margin: 0;
      top: ${({ theme }) => theme.header.height};
      left: 0px;
      position: relative;
      width: 100%;
      height: 100%;
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
          /* cursor: pointer; */
          z-index: 10000;

          i {
            pointer-events: none;
            color: ${({ theme }) => theme.colors.white};
            margin-left: ${({ theme }) => theme.padding['1/4']};
          }
        }
        button.isActive {
          i {
            transform: rotate(180deg);
          }
        }

        a:hover,
        a:focus,
        button:hover,
        button:focus {
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

        a:hover:after,
        a:focus:after {
          width: 100%;
        }

        ul {
          display: none;
          flex-direction: column;
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
        padding: 0;
        margin: 0 auto;
        justify-content: center;

        top: 0px;
        position: relative;
        width: 100%;
        overflow-x: visible;

        li.brand {
          justify-self: flex-start;
          position: absolute;
          left: 0;
          a:after {
            display: none;
          }
        }

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
            background-color: ${({ theme }) => theme.colors.pageHold[200]};
            height: ${({ theme }) => theme.margin['1/8']};
            border-radius: 0;
            transform: scaleX(0);
            transition: all 150ms ease-in-out;
          }

          a:hover:after,
          button:hover:after,
          a:focus:after,
          button:focus:after,
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
            margin: 0 -1px;
            padding: ${({ theme }) => theme.padding['1/2']} 0;
            top: ${({ theme }) => theme.header.height};
            grid-gap: ${({ theme }) => theme.padding['1/4']};
            padding: ${({ theme }) => theme.padding['1/2']};
            background-color: ${({ theme }) => theme.colors.header[800]};
            border: 1px solid ${({ theme }) => theme.colors.header.default};
            border-top: none;
            border-radius: 0 0 ${({ theme }) => theme.borderRadius.default}
              ${({ theme }) => theme.borderRadius.default};
            box-shadow: ${({ theme }) => theme.boxShadow.lg} !important;

            li {
              a {
                /* color: ${({ theme }) => theme.colors.header.default}; */
                white-space: nowrap;
                padding: ${({ theme }) => theme.padding['1/4']}
                  ${({ theme }) => theme.padding['1/2']};
                border-radius: ${({ theme }) => theme.borderRadius.sm};
                display: flex;
                align-items: center;
                border: 1px solid transparent;
                color: #fff;

                i {
                  visibility: hidden;
                  display: none;
                }
              }

              a:hover,
              a:focus,
              a.activeNavItem {
                background-color: ${({ theme }) => theme.colors.primary.default};
                /* border: 1px solid ${({ theme }) => theme.colors.primary[1300]}; */
                box-shadow: ${({ theme }) => theme.boxShadow.default};
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
`

// const Header = ({ currentLang, currentPrefix, currentPath, primaryNav }) => {
class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   //   // const { currentLang } = this.props
  //   //   // const { currentPrefix } = this.props
  //   //   // const { currentPath } = this.props
  //   //   // const { primaryNav } = this.props
  // }
  //

  componentDidMount() {
    // this.myLocationRef = React.createRef()

    const myLocationRef = createRef({
      location: null,
    })

    var pathName = ''
    if (typeof window !== 'undefined') {
      pathName = window.location.pathname
    }

    /*
     *   Start Discosure menu
     *
     *   This content is licensed according to the W3C Software License at
     *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
     *
     *   Supplemental JS for the disclosure menu keyboard behavior
     */

    var DisclosureNav = function (domNode) {
      this.rootNode = domNode
      this.triggerNodes = []
      this.controlledNodes = []
      this.openIndex = null
      this.useArrowKeys = true
    }

    DisclosureNav.prototype.init = function () {
      // var buttons = this.rootNode.querySelectorAll('button[aria-expanded][aria-controls], a.l1')
      var buttons = this.rootNode.querySelectorAll('.l1')
      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i]
        this.triggerNodes.push(button)
        var menu = button.parentNode.querySelector('ul')
        if (menu) {
          // save ref to button and controlled menu
          // this.triggerNodes.push(button)
          this.controlledNodes.push(menu)

          // collapse menus
          button.setAttribute('aria-expanded', 'false')
          this.toggleMenu(menu, false)

          // attach event listeners
          menu.addEventListener('keydown', this.handleMenuKeyDown.bind(this))
        } else {
          this.controlledNodes.push(button)
        }
        button.addEventListener('click', this.handleButtonClick.bind(this))
        button.addEventListener('keydown', this.handleButtonKeyDown.bind(this))
      }

      // console.log(this.triggerNodes)
      // console.log(this.controlledNodes)
      this.rootNode.addEventListener('focusout', this.handleBlur.bind(this))
    }

    DisclosureNav.prototype.toggleMenu = function (domNode, show) {
      if (domNode) {
        domNode.style.display = show ? 'flex' : 'none'
      }
    }

    DisclosureNav.prototype.toggleExpand = function (index, expanded) {
      // close open menu, if applicable
      if (this.openIndex !== index) {
        this.toggleExpand(this.openIndex, false)
        // Close style of menu button
        for (var i = 0; i < this.triggerNodes.length; ++i) {
          this.triggerNodes[i].classList.remove('isActive')
        }
      }

      // handle menu at called index
      if (this.triggerNodes[index]) {
        // console.log(index)
        this.openIndex = expanded ? index : null
        this.triggerNodes[index].setAttribute('aria-expanded', expanded)

        // dont style brand menu button #1 in array
        if (index !== 0) {
          // only if the item has a sub menu - toggle
          if (this.triggerNodes[index].classList.contains('secondaryNavBtn')) {
            this.toggleMenu(this.controlledNodes[index], expanded)
          }

          // Toggle style of menu button
          this.triggerNodes[index].classList.toggle('isActive')
        }
      }
    }

    DisclosureNav.prototype.controlFocusByKey = function (keyboardEvent, nodeList, currentIndex) {
      switch (keyboardEvent.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          keyboardEvent.preventDefault()
          if (currentIndex > -1) {
            var prevIndex = Math.max(0, currentIndex - 1)
            nodeList[prevIndex].focus()
          }
          break
        case 'ArrowDown':
        case 'ArrowRight':
          keyboardEvent.preventDefault()
          if (currentIndex > -1) {
            var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1)
            nodeList[nextIndex].focus()
          }
          break

        case 'Home':
          keyboardEvent.preventDefault()
          nodeList[0].focus()
          break

        case 'End':
          keyboardEvent.preventDefault()
          nodeList[nodeList.length - 1].focus()
          break

        default:
          return ''
      }
    }

    /* Event Handlers */
    DisclosureNav.prototype.handleBlur = function (event) {
      var menuContainsFocus = this.rootNode.contains(event.relatedTarget)
      if (!menuContainsFocus && this.openIndex !== null) {
        this.toggleExpand(this.openIndex, false)
      }
    }

    DisclosureNav.prototype.handleButtonKeyDown = function (event) {
      var targetButtonIndex = this.triggerNodes.indexOf(document.activeElement)

      // close on escape
      if (event.key === 'Escape') {
        this.toggleExpand(this.openIndex, false)
      }

      // move focus into the open menu if the current menu is open
      else if (
        this.useArrowKeys &&
        this.openIndex === targetButtonIndex &&
        event.key === 'ArrowDown'
      ) {
        event.preventDefault()
        this.controlledNodes[this.openIndex].querySelector('a').focus()
      }

      // handle arrow key navigation between top-level buttons, if set
      else if (this.useArrowKeys) {
        this.controlFocusByKey(event, this.triggerNodes, targetButtonIndex)
      }
    }

    DisclosureNav.prototype.handleButtonClick = function (event) {
      var button = event.target
      var buttonIndex = this.triggerNodes.indexOf(button)
      var buttonExpanded = button.getAttribute('aria-expanded') === 'true'
      this.toggleExpand(buttonIndex, !buttonExpanded)
    }

    DisclosureNav.prototype.handleMenuKeyDown = function (event) {
      if (this.openIndex === null) {
        return
      }

      var menuLinks = Array.prototype.slice.call(
        this.controlledNodes[this.openIndex].querySelectorAll('a')
      )
      var currentIndex = menuLinks.indexOf(document.activeElement)

      // close on escape
      if (event.key === 'Escape') {
        this.triggerNodes[this.openIndex].focus()
        this.toggleExpand(this.openIndex, false)
      }

      // handle arrow key navigation within menu links, if set
      else if (this.useArrowKeys) {
        this.controlFocusByKey(event, menuLinks, currentIndex)
      }
    }

    // switch on/off arrow key navigation
    DisclosureNav.prototype.updateKeyControls = function (useArrowKeys) {
      this.useArrowKeys = useArrowKeys
    }

    /* Initialize Disclosure Menus */

    var menus = document.querySelectorAll('.disclosure-nav')
    var disclosureMenus = []

    for (var i = 0; i < menus.length; i++) {
      disclosureMenus[i] = new DisclosureNav(menus[i])
      disclosureMenus[i].init()
    }

    // fake link behavior
    var links = document.querySelectorAll('[href="#mlmv-page-content"]')
    // var examplePageHeading = document.getElementById('mythical-page-heading')
    for (var x = 0; x < links.length; x++) {
      links[x].addEventListener('click', function (event) {
        // handle aria-current
        for (var n = 0; n < links.length; n++) {
          links[n].removeAttribute('aria-current')
        }
        this.setAttribute('aria-current', 'page')
      })
    }

    /*
     *   End Discosure menu
     */

    const skipLink = document.querySelector('.skipLink')
    const headerNavWrapper = document.querySelector('.headerNavWrapper')
    const secondaryNav = document.querySelector('.secondaryNav')

    const headerNav = document.querySelector('.headerNav')
    // const disclosureNav = document.querySelector('.disclosure-nav')
    const headerNavExpaned = document.querySelector('.secondaryNavList')
    const toggleHamburger = document.querySelector('.hamburger')
    const closeHamburger = document.querySelector('.closeMenu')
    const brandLink = document.querySelector('.brand')
    // const brandMobile = document.querySelector('.mobile')

    'load, resize, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        eventList()
      })
    })

    // fire route hange
    if (myLocationRef.current !== this.props.currentPath) {
      // console.log('routeChange')
      myLocationRef.current = this.props.currentPath
      eventList()
    }

    function eventList() {
      var viewportWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )

      // var viewportWidth = window.innerWidth
      // console.log(viewportWidth)

      if (viewportWidth > 768) {
        closeHamburgerNav()

        // Move the brand span and change to a li
        let brand = document.querySelector('span.brand')
        const disclosureNav = document.querySelector('.disclosure-nav')
        if (brand) {
          // console.log('desktop')
          disclosureNav.insertBefore(brand, disclosureNav.firstChild)
          let newEl = document.createElement('li')
          newEl.classList.add('brand')
          newEl.innerHTML = brand.innerHTML
          brand.parentNode.replaceChild(newEl, brand)
        }
      } else {
        // Move the brand li and change to a span
        let brand = document.querySelector('li.brand')
        const moveToDMobile = document.querySelector('.headerNav')

        if (brand) {
          // console.log('mobile')
          moveToDMobile.insertBefore(brand, moveToDMobile.firstChild)
          let newEl = document.createElement('span')
          newEl.classList.add('brand')
          newEl.innerHTML = brand.innerHTML
          // newEl.setAttribute('style', 'right:0')
          brand.parentNode.replaceChild(newEl, brand)
        }
      }
    }

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

    brandLink.addEventListener('click', function () {
      closeHamburgerNav()
    })

    function openHamburgerNav() {
      headerNav.classList.add('open', 'fillBground')
      toggleHamburger.classList.add('is-active')
      toggleHamburger.setAttribute('aria-label', 'Close mobile navigation')
      toggleHamburger.setAttribute('aria-expanded', 'true')
      toggleHamburger.setAttribute('aria-pressed', 'true')
      closeHamburger.classList.remove('hide')
    }

    function closeHamburgerNav() {
      var secondaryNavBtn = document.querySelectorAll('.secondaryNavBtn')
      var secondaryNavList = document.querySelectorAll('.secondaryNavList')
      for (var i = 0; i < secondaryNavBtn.length; ++i) {
        secondaryNavBtn[i].classList.remove('isActive')
        secondaryNavBtn[i].setAttribute('aria-expanded', 'false')
        secondaryNavList[i].setAttribute('style', 'display: none;')

        // handleCloseSecondaryNavAria(secondaryNavBtn[i])
      }

      headerNav.classList.remove('open', 'fillBground')
      toggleHamburger.classList.remove('is-active')
      toggleHamburger.setAttribute('aria-label', 'Open mobile navigation')
      toggleHamburger.setAttribute('aria-expanded', 'false')
      toggleHamburger.setAttribute('aria-pressed', 'false')
      closeHamburger.classList.add('hide')
      headerNavExpaned && headerNavExpaned.setAttribute('style', 'display: none;')
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

      if (window.pageYOffset <= 0) {
        currentScrollPos = 0
      }
      prevScrollpos = currentScrollPos
    })
  }

  render() {
    // const { currentLang } = this.props
    // const { currentPrefix } = this.props
    // const { currentPath } = this.props
    // const { primaryNav } = this.props

    const _ = require('lodash')
    var pathName = ''
    if (typeof window !== 'undefined') {
      pathName = window.location.pathname
    }

    const isPartiallyActive = ({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: 'activeNavItem' } : {}
    }

    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: 'activeNavItem' } : {}
    }

    return (
      <HeaderWrapper className="headerNavWrapper">
        <div className="skipNav">
          <a className="skipLink" href="#main">
            Skip to main content
          </a>
        </div>

        <nav className="headerNav" aria-label="My Life My Voice">
          <button
            className="l1 hamburger hamburger--squeeze"
            type="button"
            aria-label="Toggle mobile navigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-pressed="false"
            aria-haspopup="true"
          >
            {/* <span className="hamburger-label"> {i18n[currentLang].menu}</span> */}
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <ul id="mainNavigation" className="disclosure-nav">
            <li className="brand">
              <Link
                to={
                  this.props.currentPrefix === '/'
                    ? this.props.currentPrefix
                    : `${this.props.currentPrefix}/`
                }
                aria-label={i18n[this.props.currentLang].linkToHomepage}
                className="l1"
              >
                <Brand currentLang={this.props.currentLang} />
              </Link>
            </li>

            {this.props.primaryNav.map((navItem, index) => {
              //console.log(navItem.link)
              return (
                <li key={`main-nav-${index}`}>
                  {navItem.primary.link.uid ? (
                    navItem.primary.link.uid !== null ? (
                      <Link
                        to={linkResolver(navItem.primary.link)}
                        className="l1"
                        activeClassName="activeNavItem"
                        getProps={
                          navItem.primary.link.uid !== 'index' ? isPartiallyActive : isActive
                        }
                      >
                        {navItem.primary.label.text}
                      </Link>
                    ) : (
                      <a
                        href={
                          navItem.primary.link.raw.url !== undefined
                            ? navItem.primary.link.raw.url
                            : ''
                        }
                        className="l1"
                        getProps={
                          navItem.primary.link.uid !== 'index' ? isPartiallyActive : isActive
                        }
                      >
                        {navItem.primary.label.text}
                      </a>
                    )
                  ) : (
                    <button
                      className={
                        'l1 secondaryNavBtn ' +
                        `${
                          pathName.includes(_.kebabCase(navItem.primary.label.text)) &&
                          'activeNavItem'
                        }`
                      }
                      aria-controls={`id_${navItem.primary.label.text
                        .replace(/\s/g, '_')
                        .toLowerCase()}`}
                      aria-haspopup="true"
                      aria-expanded="true"
                      type="button"
                    >
                      {navItem.primary.label.text}
                      <IconMaterial icon={'expand_more'} />
                    </button>
                  )}

                  {navItem.items.subNavItem && (
                    <>
                      <ul
                        id={`id_${navItem.primary.label.text.replace(/\s/g, '_').toLowerCase()}`}
                        className="secondaryNavList"
                        aria-label={navItem.primary.label.text}
                      >
                        {navItem.items.map((subNavItem, index) => {
                          return (
                            <li key={`sub-nav-${index}`}>
                              {subNavItem.sub_nav_link.uid !== null ? (
                                <Link
                                  to={linkResolver(subNavItem.sub_nav_link)}
                                  activeClassName="activeNavItem"
                                >
                                  {subNavItem.sub_nav_link_label.text}
                                  <IconMaterial icon={'chevron_right'} />
                                </Link>
                              ) : (
                                <a
                                  href={
                                    subNavItem.sub_nav_link.raw.url !== undefined
                                      ? subNavItem.sub_nav_link.raw.url
                                      : ''
                                  }
                                >
                                  {subNavItem.sub_nav_link_label.text}
                                  <IconMaterial icon={'chevron_right'} />
                                </a>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </>
                  )}
                </li>
              )
            })}

            <li className="closeMenu hide">
              <button className="l1" type="button">
                {i18n[this.props.currentLang].close}
                <IconMaterial icon={'clear'} />
              </button>
            </li>
          </ul>

          {/* // Activate locale */}
          {/* <LocaleSwitcher currentLang={currentLang} currentPath={currentPath} /> */}
          <ThemeSwitcher changeTheme={this.props.changeTheme} currTheme={this.props.currTheme} />
        </nav>
      </HeaderWrapper>
    )
  }
}

export default Header
