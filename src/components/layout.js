import * as React from 'react'
import styled from 'styled-components'

import Header from './common/header/'
import Footer from './common/footer'
import i18n from '../../config/i18n'

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.page.bground.default};

  & .layoutInner {
    flex-grow: 1;
    overflow-x: hidden;
    display: flex;

    main {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      z-index: 1;
      flex-grow: 1;
      min-width: 320px;

      section.section-layout:first-child {
        margin-top: 60px;
      }

      section.section-layout.heroImage:first-child {
        padding-top: 0px;
        margin-top: 60px;
      }
    }

    main.index {
      section.section-layout.heroImage:first-child {
        padding-top: 0px;
        margin-top: 0px;
      }
    }

    main:before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      left: 0px;
      height: 60px;
      z-index: -1;
      background-color: ${({ theme }) => theme.colors.header.default};
    }
  }
`
const Layout = ({ children, currentLang, primaryNav }) => {
  var pathName = ''
  if (typeof window !== 'undefined') {
    pathName = window.location.pathname
  }

  // Get the current prefix path ( used for a home btton)
  var currentPrefix = getCurrentPrefix(currentLang)
  function getCurrentPrefix(currentLang) {
    currentPrefix = currentLang.slice(0, 2)
    if (currentPrefix === i18n.defaultPrefix) {
      currentPrefix = '/'
    } else {
      currentPrefix = `/${currentPrefix}`
    }
    return currentPrefix
  }
  // console.log('currentPrefix =' + currentPrefix)

  // Get the current uid path
  var currentPath = getCurrentPath(pathName)
  function getCurrentPath(path) {
    for (var i = 0; i < i18n.allPrefix.length; i++) {
      if (i18n.allPrefix[i] !== '/') {
        path = path.split(i18n.allPrefix[i]).join('')
      }
    }
    path = path.substring(1)
    return path
  }

  // console.log('currentPath = ' + currentPath)

  return (
    <LayoutWrapper>
      <Header
        currentLang={currentLang}
        currentPrefix={currentPrefix}
        currentPath={currentPath}
        primaryNav={primaryNav}
      />

      <div className="layoutInner">
        <main id="main" className={i18n.allPrefix.includes(pathName) ? 'index' : ''}>
          {children}
        </main>
      </div>
      <Footer currentLang={currentLang} currentPrefix={currentPrefix} />
    </LayoutWrapper>
  )
}

export default Layout
