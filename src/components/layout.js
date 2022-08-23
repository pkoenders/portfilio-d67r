import * as React from 'react'
import Header from '/src/components/common/header'
import Footer from '/src/components/common/footer'
import i18n from '/config/i18n'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '/src/themes/themeMerger'
import { GlobalStyles } from '/src/themes/globalStyles'

const light = lightTheme
const dark = darkTheme

const LayoutWrapper = styled.div`
  display: flex;
  min-width: 100%;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.page.bground.default};
  transition: background-color 0.2s ease-in;

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

      section.section-layout.heroBanner:first-child {
        .heroImage {
          margin-top: 0px !important;
        }
      }
    }
  }
`
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lightTheme: true }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    const localStorageLayout = localStorage.getItem('lightTheme')
    if (localStorageLayout) {
      this.setState({ lightTheme: JSON.parse(localStorageLayout) })
    }

    const savedTheme = localStorage.getItem('lightTheme')
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      localStorage.setItem('lightTheme', this.state.lightTheme)
    } else if (prefersDark) {
      localStorage.setItem('lightTheme', !this.state.lightTheme)
    }
  }

  changeTheme() {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
    localStorage.setItem('lightTheme', !this.state.lightTheme)
  }

  render() {
    const { children } = this.props
    const { currentLang } = this.props
    const { primaryNav } = this.props

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

    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark}>
        <GlobalStyles />
        <LayoutWrapper>
          <Header
            currentLang={currentLang}
            currentPrefix={currentPrefix}
            currentPath={currentPath}
            primaryNav={primaryNav}
            changeTheme={this.changeTheme}
            lightTheme={this.state.lightTheme}
          />

          <div className="layoutInner">
            <main
              id="main"
              tabIndex="-1"
              className={i18n.allPrefix.includes(pathName) ? 'index' : ''}
            >
              {children}
            </main>
          </div>
          <Footer currentLang={currentLang} currentPrefix={currentPrefix} />
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}
export default Layout
